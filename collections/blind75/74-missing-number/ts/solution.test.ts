import {expect, test} from 'vitest';
import {missingNumber} from './solution';

const cases = [
  {
    "args": [
      [
        1
      ]
    ],
    "expected": 0,
    "name": "baseline: [[1]]"
  },
  {
    "name": "zero is missing",
    "args": [
      [
        1,
        2,
        3
      ]
    ],
    "expected": 0
  },
  {
    "name": "middle number is missing",
    "args": [
      [
        3,
        0,
        1
      ]
    ],
    "expected": 2
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(missingNumber(...(args as any))).toEqual(expected);
});
