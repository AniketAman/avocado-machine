import {expect, test} from 'vitest';
import {lengthOfLIS} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": 1,
    "name": "baseline: [[0]]"
  },
  {
    "name": "duplicate values are not increasing",
    "args": [
      [
        2,
        2,
        2
      ]
    ],
    "expected": 1
  },
  {
    "name": "later small values allow longer subsequence",
    "args": [
      [
        10,
        9,
        2,
        5,
        3,
        7,
        101,
        18
      ]
    ],
    "expected": 4
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(lengthOfLIS(...(args as any))).toEqual(expected);
});
