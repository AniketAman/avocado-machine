import {expect, test} from 'vitest';
import {maxSubArray} from './solution';

const cases = [
  {
    "args": [
      [
        -8
      ]
    ],
    "expected": -8,
    "name": "baseline: [[-8]]"
  },
  {
    "name": "all negative values choose the least negative",
    "args": [
      [
        -2,
        -3,
        -1,
        -5
      ]
    ],
    "expected": -1
  },
  {
    "name": "internal best segment beats entire array",
    "args": [
      [
        4,
        -1,
        2,
        1,
        -9,
        3
      ]
    ],
    "expected": 6
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(maxSubArray(...(args as any))).toEqual(expected);
});
