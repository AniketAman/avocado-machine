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
    "name": "first and last houses cannot both be robbed",
    "args": [
      [
        2,
        3,
        2
      ]
    ],
    "expected": 3
  },
  {
    "name": "single house",
    "args": [
      [
        5
      ]
    ],
    "expected": 5
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(rob(...(args as any))).toEqual(expected);
});
