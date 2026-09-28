import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const collectionsRoot = path.join(root, 'collections');
export const runner = 'typescript-vitest';
export const defaultLanguage = 'ts';
const runners = {ts: {name: runner, extension: 'ts', testFile: 'solution.test.ts'}};

function languageFiles(problem, language = defaultLanguage) {
  const config = runners[language];
  if (!config || !problem.variants?.[language]) throw new Error(`Unsupported language for #${problem.id}: ${language}`);
  const dir = path.join(problem.dir, language);
  return {dir, source: path.join(dir, `solution.template.${config.extension}`), target: path.join(dir, `solution.${config.extension}`), test: path.join(dir, config.testFile), extension: config.extension};
}

function assertName(value, label) {
  if (!/^[a-z][a-z0-9-]*$/.test(value)) throw new Error(`Invalid ${label}: ${value}`);
}

export function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDays(day, count) {
  const [year, month, date] = day.split('-').map(Number);
  const d = new Date(year, month - 1, date + count);
  return localDate(d);
}

export function newMetadata(id, title) {
  return {id, title, variants: {[defaultLanguage]: {runner, sm2: {repetitions: 0, easeFactor: 2.5, intervalDays: 0, dueDate: null, lastGrade: null, lastReviewedAt: null}}}};
}

export function collections() {
  if (!fs.existsSync(collectionsRoot)) return [];
  return fs.readdirSync(collectionsRoot, {withFileTypes: true})
    .filter(entry => entry.isDirectory() && /^[a-z][a-z0-9-]*$/.test(entry.name))
    .map(entry => entry.name).sort();
}

export function problems(collection) {
  assertName(collection, 'collection');
  const base = path.join(collectionsRoot, collection);
  if (!fs.existsSync(base)) throw new Error(`Unknown collection: ${collection}`);
  return fs.readdirSync(base, {withFileTypes: true})
    .filter(entry => entry.isDirectory() && /^\d+-[a-z0-9-]+$/.test(entry.name))
    .map(entry => {
      const dir = path.join(base, entry.name);
      const metadata = JSON.parse(fs.readFileSync(path.join(dir, 'metadata.json'), 'utf8'));
      if (!Number.isSafeInteger(metadata.id) || metadata.id < 1 || !entry.name.startsWith(`${metadata.id}-`)) throw new Error(`Invalid problem number in ${dir}`);
      if (!metadata.variants || !Object.keys(metadata.variants).length) throw new Error(`Missing language variants in ${dir}`);
      if (!metadata.variants[defaultLanguage]) throw new Error(`Missing default language in ${dir}: ${defaultLanguage}`);
      for (const [language, variant] of Object.entries(metadata.variants)) {
        if (runners[language]?.name !== variant.runner || !variant.sm2) throw new Error(`Unsupported runner in ${dir}: ${variant.runner}`);
      }
      return {...metadata, dir, collection, language: defaultLanguage, runner: metadata.variants[defaultLanguage]?.runner, sm2: metadata.variants[defaultLanguage]?.sm2};
    }).sort((a, b) => a.id - b.id);
}

export function problemById(collection, id) {
  const problem = problems(collection).find(item => item.id === Number(id));
  if (!problem) throw new Error(`Problem ${id} not found in ${collection}`);
  return problem;
}

export function isDue(problem, today = localDate()) {
  return problem.sm2.lastGrade !== null && !!problem.sm2.dueDate && problem.sm2.dueDate <= today;
}

export function status(problem, today = localDate()) {
  if (problem.sm2.lastGrade === null) return 'New';
  return isDue(problem, today) ? 'Due' : `Scheduled ${problem.sm2.dueDate}`;
}

export function suggestions(items, count, today = localDate(), mode = 'practice') {
  if (!['practice', 'new', 'review'].includes(mode)) throw new Error(`Unknown practice mode: ${mode}`);
  const due = items.filter(item => isDue(item, today))
    .sort((a, b) => a.sm2.dueDate.localeCompare(b.sm2.dueDate) || a.id - b.id);
  const fresh = items.filter(item => item.sm2.lastGrade === null).sort((a, b) => a.id - b.id);
  if (mode !== 'practice') {
    const limit = count === undefined ? 3 : count;
    if (!Number.isSafeInteger(limit) || limit < 1) throw new Error('Count must be a positive integer');
    return mode === 'new' ? {due: [], fresh: fresh.slice(0, limit)} : {due: due.slice(0, limit), fresh: []};
  }
  if (count === undefined) {
    const selectedDue = due.slice(0, 3);
    const selectedNew = fresh.slice(0, 3);
    let extra = 6 - selectedDue.length - selectedNew.length;
    if (extra > 0) {
      const moreDue = due.slice(selectedDue.length, selectedDue.length + extra);
      selectedDue.push(...moreDue);
      extra -= moreDue.length;
    }
    if (extra > 0) selectedNew.push(...fresh.slice(selectedNew.length, selectedNew.length + extra));
    return {due: selectedDue, fresh: selectedNew};
  }
  if (!Number.isSafeInteger(count) || count < 1) throw new Error('Count must be a positive integer');
  const selectedDue = due.slice(0, count);
  return {due: selectedDue, fresh: fresh.slice(0, count - selectedDue.length)};
}

export function searchGroups(items, selected, query, today = localDate()) {
  const q = query.trim().toLowerCase();
  const match = item => !q || `${item.id} ${item.title} ${fs.readFileSync(path.join(item.dir, 'description.md'), 'utf8')}`.toLowerCase().includes(q);
  const due = selected.due.filter(match);
  const fresh = selected.fresh.filter(match);
  const shown = new Set([...selected.due, ...selected.fresh].map(item => item.id));
  const current = q ? items.filter(item => !shown.has(item.id) && match(item)).sort((a, b) => a.id - b.id) : [];
  return {due, fresh, current};
}

export function testCommand(problem) {
  return `npx vitest run ${path.relative(root, languageFiles(problem, problem.language).test)}`;
}

export function solutionPath(problem) {
  return languageFiles(problem, problem.language).target;
}

export function startProblem(collection, id, now = new Date(), language = defaultLanguage) {
  const problem = problemById(collection, id);
  return startProblemFiles(problem, now, language);
}

export function startProblemFiles(problem, now = new Date(), language = defaultLanguage) {
  const {dir, source, target, extension} = languageFiles(problem, language);
  if (!fs.existsSync(source)) throw new Error(`Missing starter template: ${source}`);
  let archive = null;
  const shouldArchive = fs.existsSync(target) && !fs.readFileSync(target).equals(fs.readFileSync(source));
  if (shouldArchive) {
    const archiveDir = path.join(dir, 'attempts');
    fs.mkdirSync(archiveDir, {recursive: true});
    const timestamp = now.toISOString().replaceAll(':', '-').replaceAll('.', '-');
    let candidate = path.join(archiveDir, `${timestamp}.${extension}`);
    let suffix = 2;
    while (fs.existsSync(candidate)) candidate = path.join(archiveDir, `${timestamp}-${suffix++}.${extension}`);
    fs.copyFileSync(target, candidate, fs.constants.COPYFILE_EXCL);
    archive = candidate;
  }
  fs.copyFileSync(source, target);
  return {problem, solution: target, archive};
}

export function nextSm2(state, grade, today = localDate()) {
  if (!Number.isInteger(grade) || grade < 0 || grade > 5) throw new Error('Grade must be an integer from 0 to 5');
  const previousEase = Number(state.easeFactor ?? 2.5);
  const easeFactor = Math.max(1.3, previousEase + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
  const repetitions = grade < 3 ? 0 : Number(state.repetitions ?? 0) + 1;
  const intervalDays = grade < 3 ? 1 : repetitions === 1 ? 1 : repetitions === 2 ? 6 : Math.ceil(Number(state.intervalDays) * easeFactor);
  return {repetitions, easeFactor, intervalDays, dueDate: addDays(today, intervalDays), lastGrade: grade, lastReviewedAt: today};
}

export function gradeProblem(collection, id, grade, today = localDate(), language = defaultLanguage) {
  const problem = problemById(collection, id);
  if (!problem.variants[language]) throw new Error(`Unsupported language for #${id}: ${language}`);
  const value = Number(grade);
  const sm2 = nextSm2(problem.variants[language].sm2, value, today);
  const metadata = {id: problem.id, title: problem.title, variants: {...problem.variants, [language]: {...problem.variants[language], sm2}}};
  const target = path.join(problem.dir, 'metadata.json');
  const temp = path.join(problem.dir, `.metadata-${process.pid}-${Date.now()}.tmp`);
  fs.writeFileSync(temp, JSON.stringify(metadata, null, 2) + '\n');
  fs.renameSync(temp, target);
  return {...problem, language, sm2};
}

export function addProblem(collection, title) {
  assertName(collection, 'collection');
  if (!title || !title.trim()) throw new Error('A problem title is required');
  const cleanTitle = title.trim();
  const slug = cleanTitle.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!slug) throw new Error('Title must contain letters or numbers');
  const base = path.join(collectionsRoot, collection);
  fs.mkdirSync(base, {recursive: true});
  const entries = fs.readdirSync(base).map(name => Number(name.match(/^(\d+)-/)?.[1] ?? 0));
  const id = Math.max(0, ...entries) + 1;
  const dir = path.join(base, `${id}-${slug}`);
  fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, 'description.md'), `# ${cleanTitle}\n\nDescribe the problem, examples, and constraints here.\n`);
  const languageDir = path.join(dir, defaultLanguage);
  fs.mkdirSync(languageDir);
  fs.writeFileSync(path.join(languageDir, 'solution.test.ts'), `import {test} from 'vitest';\n\ntest.todo(${JSON.stringify(cleanTitle)});\n`);
  fs.writeFileSync(path.join(languageDir, 'solution.template.ts'), '// Start your solution here.\n');
  fs.writeFileSync(path.join(languageDir, 'solution.ts'), '// Start your solution here.\n');
  fs.writeFileSync(path.join(dir, 'metadata.json'), JSON.stringify(newMetadata(id, cleanTitle), null, 2) + '\n');
  return {id, title: cleanTitle, dir, collection};
}

export function runTests(problem) {
  const bin = path.join(root, 'node_modules', 'vitest', 'vitest.mjs');
  const file = path.relative(root, languageFiles(problem, problem.language).test);
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [bin, 'run', file], {cwd: root, env: {...process.env, FORCE_COLOR: '0'}});
    let output = '';
    child.stdout.on('data', chunk => { output += chunk; });
    child.stderr.on('data', chunk => { output += chunk; });
    child.on('error', reject);
    child.on('close', code => resolve({code, output: output.trim()}));
  });
}
