import {expect, test} from 'vitest';
import {findMin} from './solution';

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
    "name": "unrotated sorted input",
    "args": [
      [
        1,
        2,
        3,
        4
      ]
    ],
    "expected": 1
  },
  {
    "name": "pivot at final element",
    "args": [
      [
        2,
        3,
        4,
        1
      ]
    ],
    "expected": 1
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(findMin(...(args as any))).toEqual(expected);
});
