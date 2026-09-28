import {expect, test} from 'vitest';
import {maxArea} from './solution';

const cases = [
  {
    "args": [
      [
        0,
        7
      ]
    ],
    "expected": 0,
    "name": "baseline: [[0,7]]"
  },
  {
    "name": "narrow tall pair beats distant short pair",
    "args": [
      [
        1,
        8,
        8,
        1
      ]
    ],
    "expected": 8
  },
  {
    "name": "all heights zero",
    "args": [
      [
        0,
        0,
        0
      ]
    ],
    "expected": 0
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(maxArea(...(args as any))).toEqual(expected);
});
