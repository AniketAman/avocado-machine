import {expect, test} from 'vitest';
import {rob} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": 0,
    "name": "baseline: [[0]]"
  },
  {
    "name": "skip adjacent high values",
    "args": [
      [
        2,
        7,
        9,
        3,
        1
      ]
    ],
    "expected": 12
  },
  {
    "name": "empty house row yields zero",
    "args": [
      []
    ],
    "expected": 0
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(rob(...(args as any))).toEqual(expected);
});
