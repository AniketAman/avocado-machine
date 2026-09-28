#!/usr/bin/env node
import {addProblem, gradeProblem, problems} from './core.mjs';
import {startTui} from './tui.mjs';

function positiveCount(value) {
  if (value === undefined) return undefined;
  const count = Number(value);
  if (!Number.isSafeInteger(count) || count < 1) throw new Error('Count must be a positive integer');
  return count;
}

async function main(args) {
  const [verb, ...rest] = args;
  if (!verb) return startTui();
  if (['practice', 'new', 'review'].includes(verb)) {
    if (rest.length > 2) throw new Error(`Usage: avocado ${verb} [collection] [count]`);
    if (!rest[0]) return startTui({initialMode: verb});
    problems(rest[0]);
    return startTui({initialCollection: rest[0], initialCount: positiveCount(rest[1]), initialMode: verb});
  }
  if (verb === 'done') {
    if (rest.length !== 3) throw new Error('Usage: avocado done <collection> <number> <grade>');
    const [collection, number, grade] = rest;
    const id = Number(number);
    if (!Number.isSafeInteger(id) || id < 1) throw new Error('Problem number must be a positive integer');
    const result = gradeProblem(collection, id, Number(grade));
    console.log(`#${id} ${result.title}: grade ${grade}; next review ${result.sm2.dueDate}`);
    return;
  }
  if (verb === 'add') {
    if (rest.length < 2) throw new Error('Usage: avocado add <collection> "Problem Title"');
    const [collection, ...title] = rest;
    const created = addProblem(collection, title.join(' '));
    console.log(`Created #${created.id} ${created.title} in ${created.dir}`);
    return;
  }
  if (verb === 'help' || verb === '--help' || verb === '-h') {
    console.log('avocado\navocado practice [collection] [count]\navocado new [collection] [count]\navocado review [collection] [count]\navocado done <collection> <number> <grade>\navocado add <collection> "Problem Title"');
    return;
  }
  throw new Error(`Unknown command: ${verb}`);
}

main(process.argv.slice(2)).catch(error => {
  console.error(`avocado: ${error.message}`);
  process.exitCode = 1;
});
