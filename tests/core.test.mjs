import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL, fileURLToPath} from 'node:url';
import {newMetadata, nextSm2, searchGroups, startProblemFiles, suggestions} from '../src/core.mjs';

function item(id, dueDate = null) {
  const metadata = newMetadata(id, `Problem ${id}`);
  if (dueDate) metadata.variants.ts.sm2 = {...metadata.variants.ts.sm2, lastGrade: 5, dueDate};
  return {...metadata, sm2: metadata.variants.ts.sm2};
}

test('suggestions include overdue reviews oldest first and fill unused slots', () => {
  const items = [item(1, '2026-09-26'), item(2, '2026-09-20'), item(3), item(4), item(5), item(6), item(7), item(8)];
  const normal = suggestions(items, undefined, '2026-09-26');
  assert.deepEqual(normal.due.map(problem => problem.id), [2, 1]);
  assert.deepEqual(normal.fresh.map(problem => problem.id), [3, 4, 5, 6]);
  const larger = suggestions(items, 5, '2026-09-26');
  assert.deepEqual(larger.due.map(problem => problem.id), [2, 1]);
  assert.deepEqual(larger.fresh.map(problem => problem.id), [3, 4, 5]);
});

test('new and review suggestions include only their selected category', () => {
  const items = [item(1, '2026-09-20'), item(2), item(3, '2026-10-01'), item(4), item(5, '2026-09-25')];
  assert.deepEqual(suggestions(items, undefined, '2026-09-26', 'new').fresh.map(problem => problem.id), [2, 4]);
  assert.deepEqual(suggestions(items, undefined, '2026-09-26', 'new').due, []);
  assert.deepEqual(suggestions(items, 1, '2026-09-26', 'review').due.map(problem => problem.id), [1]);
  assert.deepEqual(suggestions(items, undefined, '2026-09-26', 'review').due.map(problem => problem.id), [1, 5]);
  assert.deepEqual(suggestions(items, undefined, '2026-09-26', 'review').fresh, []);
});

test('SM-2 advances on grades and restarts weak recall tomorrow', () => {
  const initial = newMetadata(1, 'One').variants.ts.sm2;
  const first = nextSm2(initial, 5, '2026-09-26');
  assert.equal(first.intervalDays, 1);
  assert.equal(first.dueDate, '2026-09-27');
  const second = nextSm2(first, 5, '2026-09-27');
  assert.equal(second.intervalDays, 6);
  const third = nextSm2(second, 5, '2026-10-03');
  assert.equal(third.intervalDays, 17);
  const weak = nextSm2(third, 1, '2026-10-19');
  assert.equal(weak.repetitions, 0);
  assert.equal(weak.dueDate, '2026-10-20');
  assert.throws(() => nextSm2(initial, 6), /Grade/);
});

test('search includes matches outside suggestions in current collection', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'avocado-search-'));
  try {
    const items = [item(1), item(2), item(3)].map(problem => {
      const problemDir = path.join(dir, String(problem.id));
      fs.mkdirSync(problemDir);
      fs.writeFileSync(path.join(problemDir, 'description.md'), problem.id === 3 ? 'Find a graph path' : 'Sort values');
      return {...problem, dir: problemDir};
    });
    const groups = searchGroups(items, {due: [], fresh: items.slice(0, 2)}, 'graph');
    assert.deepEqual(groups.current.map(problem => problem.id), [3]);
    assert.deepEqual(groups.fresh, []);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
});

test('starting an attempt archives the previous solution and resets from template', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'avocado-attempt-'));
  try {
    fs.mkdirSync(path.join(dir, 'ts'));
    fs.writeFileSync(path.join(dir, 'ts', 'solution.template.ts'), 'export const answer = 0;\n');
    fs.writeFileSync(path.join(dir, 'ts', 'solution.ts'), 'export const answer = 42;\n');
    const result = startProblemFiles({dir, variants: {ts: {sm2: {lastGrade: 5}}}}, new Date('2026-09-26T12:00:00.000Z'));
    assert.equal(fs.readFileSync(result.archive, 'utf8'), 'export const answer = 42;\n');
    assert.equal(fs.readFileSync(result.solution, 'utf8'), 'export const answer = 0;\n');
    const again = startProblemFiles({dir, variants: {ts: {sm2: {lastGrade: 5}}}}, new Date('2026-09-26T12:00:00.000Z'));
    assert.equal(again.archive, null);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
});

test('starting a new scaffold skips a redundant archive of its untouched starter', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'avocado-new-'));
  try {
    fs.mkdirSync(path.join(dir, 'ts'));
    fs.writeFileSync(path.join(dir, 'ts', 'solution.template.ts'), '// Start here\n');
    fs.writeFileSync(path.join(dir, 'ts', 'solution.ts'), '// Start here\n');
    const result = startProblemFiles({dir, variants: {ts: {sm2: {lastGrade: null}}}});
    assert.equal(result.archive, null);
    assert.equal(fs.existsSync(path.join(dir, 'ts', 'attempts')), false);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
});

test('scaffolding assigns a permanent number and writes a pending test', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'avocado-add-'));
  try {
    fs.mkdirSync(path.join(dir, 'src'));
    const source = fileURLToPath(new URL('../src/core.mjs', import.meta.url));
    const copy = path.join(dir, 'src', 'core.mjs');
    fs.copyFileSync(source, copy);
    const isolated = await import(pathToFileURL(copy).href);
    const first = isolated.addProblem('javascript', 'Binary Search');
    const second = isolated.addProblem('javascript', 'Merge Sort');
    assert.equal(first.id, 1);
    assert.equal(second.id, 2);
    assert.equal(fs.readFileSync(path.join(first.dir, 'ts', 'solution.ts'), 'utf8'), fs.readFileSync(path.join(first.dir, 'ts', 'solution.template.ts'), 'utf8'));
    assert.match(fs.readFileSync(path.join(first.dir, 'ts', 'solution.test.ts'), 'utf8'), /test.todo/);
    assert.equal(isolated.problems('javascript').length, 2);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
});
