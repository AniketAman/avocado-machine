import {expect, test} from 'vitest';
import {canJump} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": true,
    "name": "baseline: [[0]]"
  },
  {
    "name": "zero before the end can block progress",
    "args": [
      [
        3,
        2,
        1,
        0,
        4
      ]
    ],
    "expected": false
  },
  {
    "name": "zero at final index is reachable",
    "args": [
      [
        2,
        0,
        0
      ]
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(canJump(...(args as any))).toEqual(expected);
});
