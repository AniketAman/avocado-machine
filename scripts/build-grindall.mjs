import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {newMetadata} from '../src/core.mjs';
import specs from './grindall-specs.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const collectionsRoot = path.join(root, 'collections');
const targetRoot = path.join(collectionsRoot, 'grindall');
const refreshDescriptions = process.argv.includes('--refresh-descriptions');
const refreshTests = process.argv.includes('--refresh-tests');
function writeIfMissing(file, contents, refresh = false) {
  if (refresh || !fs.existsSync(file)) fs.writeFileSync(file, contents);
}
const source = fs.readFileSync(path.join(targetRoot, 'source.tsv'), 'utf8').trimEnd().split('\n');
const header = source.shift();
if (header !== 'id\ttopic\ttitle\tdifficulty\tleetcode_slug') throw new Error('Unexpected source header');

const existing = new Map();
for (const collection of ['blind75', 'grind75']) {
  for (const name of fs.readdirSync(path.join(collectionsRoot, collection))) {
    const match = name.match(/^(\d+)-(.+)$/);
    if (match) {
      const metadata = JSON.parse(fs.readFileSync(path.join(collectionsRoot, collection, name, 'metadata.json'), 'utf8'));
      existing.set(match[2], metadata.ref ?? {collection, id: Number(match[1])});
    }
  }
}

const entries = source.map((line, index) => {
  const [number, topic, title, difficulty, slug] = line.split('\t');
  if (Number(number) !== index + 1 || !topic || !title || !['Easy', 'Medium', 'Hard'].includes(difficulty) || !slug) {
    throw new Error(`Invalid source row ${index + 1}`);
  }
  return {id: index + 1, topic, title, difficulty, slug};
});
if (entries.length !== 169 || new Set(entries.map(entry => entry.slug)).size !== 169) throw new Error('Expected 169 unique problems');

const missing = entries.filter(entry => !existing.has(entry.slug));
const missingSpecs = missing.filter(entry => !specs[entry.slug]).map(entry => entry.slug);
const staleSpecs = Object.keys(specs).filter(slug => !missing.some(entry => entry.slug === slug));
if (missingSpecs.length || staleSpecs.length) throw new Error(`Spec mismatch: missing ${missingSpecs.join(', ')}; stale ${staleSpecs.join(', ')}`);

for (const entry of entries) {
  const title = `${entry.topic}: ${entry.title} (${entry.difficulty})`;
  const dir = path.join(targetRoot, `${entry.id}-${entry.slug}`);
  fs.mkdirSync(dir, {recursive: true});
  const ref = existing.get(entry.slug);
  if (ref) {
    writeIfMissing(path.join(dir, 'metadata.json'), JSON.stringify({id: entry.id, title, ref}, null, 2) + '\n');
    continue;
  }
  const spec = specs[entry.slug];
  const metadata = newMetadata(entry.id, title);
  writeIfMissing(path.join(dir, 'metadata.json'), JSON.stringify(metadata, null, 2) + '\n');
  const examples = spec.cases?.map(({args, expected}) => `- Input: \`${JSON.stringify(args.length === 1 ? args[0] : args)}\`; output: \`${JSON.stringify(expected)}\`.`).join('\n') ?? '';
  const signature = spec.template ? `\`\`\`ts\n${spec.template.trim()}\n\`\`\`` : `\`solve(${spec.params}): ${spec.returns}\``;
  const description = `# ${title}\n\n**Topic:** ${entry.topic} | **Difficulty:** ${entry.difficulty}\n\n${spec.summary}\n\n## TypeScript interface\n\n${signature}\n\n## Examples\n\n${examples || 'See the focused cases in `ts/solution.test.ts`.'}\n\nSource: [LeetCode problem](https://leetcode.com/problems/${entry.slug}/)\n`;
  writeIfMissing(path.join(dir, 'description.md'), description, refreshDescriptions);
  const ts = path.join(dir, 'ts');
  fs.mkdirSync(ts, {recursive: true});
  const template = spec.template ?? `${spec.prelude ?? ''}export function solve(${spec.params}): ${spec.returns} {\n  throw new Error('Not implemented');\n}\n`;
  writeIfMissing(path.join(ts, 'solution.template.ts'), template);
  writeIfMissing(path.join(ts, 'solution.ts'), template);
  const tests = spec.testCode ?? `import {expect, test} from 'vitest';\nimport {solve} from './solution';\n\n${spec.cases.map(({args, expected}, i) => `test(${JSON.stringify(`case ${i + 1}`)}, () => {\n  const args = ${JSON.stringify(args)};\n  ${spec.mutates ? `solve(...args as Parameters<typeof solve>);\n  expect(args[${spec.mutates - 1}]).toEqual(${JSON.stringify(expected)});` : `expect(solve(...args as Parameters<typeof solve>)).toEqual(${JSON.stringify(expected)});`}\n});`).join('\n\n')}\n`;
  writeIfMissing(path.join(ts, 'solution.test.ts'), tests, refreshTests);
}

console.log(`Built ${entries.length} entries: ${entries.length - missing.length} references, ${missing.length} new exercises`);
