import {expect, test} from 'vitest';
import {maxProduct} from './solution';

const cases = [
  {
    "args": [
      [
        -3
      ]
    ],
    "expected": -3,
    "name": "baseline: [[-3]]"
  },
  {
    "name": "zero resets product run",
    "args": [
      [
        -2,
        0,
        -1
      ]
    ],
    "expected": 0
  },
  {
    "name": "two negatives around a positive",
    "args": [
      [
        -2,
        3,
        -4
      ]
    ],
    "expected": 24
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(maxProduct(...(args as any))).toEqual(expected);
});
