import {expect, test} from 'vitest';
import {hasCycle} from './solution';
import {listFrom, listToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        0
      ],
      -1
    ],
    "expected": false,
    "name": "baseline: [[0],-1]"
  },
  {
    "name": "single node self cycle",
    "args": [
      [
        7
      ],
      0
    ],
    "expected": true
  },
  {
    "name": "cycle enters middle of list",
    "args": [
      [
        1,
        2,
        3,
        4
      ],
      1
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    const head = listFrom(args[0]);
    if (args[1] >= 0) { let tail = head!; while (tail.next) tail = tail.next; let entry = head!; for (let j = 0; j < args[1]; j++) entry = entry.next!; tail.next = entry; }
    expect(hasCycle(head)).toBe(expected);
});
