import {expect, test} from 'vitest';
import {uniquePaths} from './solution';

const cases = [
  {
    "args": [
      1,
      1
    ],
    "expected": 1
  },
  {
    "args": [
      2,
      1
    ],
    "expected": 1
  },
  {
    "args": [
      3,
      1
    ],
    "expected": 1
  },
  {
    "args": [
      4,
      2
    ],
    "expected": 4
  },
  {
    "args": [
      5,
      2
    ],
    "expected": 5
  },
  {
    "args": [
      6,
      2
    ],
    "expected": 6
  },
  {
    "args": [
      7,
      3
    ],
    "expected": 28
  },
  {
    "args": [
      8,
      3
    ],
    "expected": 36
  },
  {
    "args": [
      1,
      3
    ],
    "expected": 1
  },
  {
    "args": [
      2,
      4
    ],
    "expected": 4
  },
  {
    "args": [
      3,
      4
    ],
    "expected": 10
  },
  {
    "args": [
      4,
      4
    ],
    "expected": 20
  },
  {
    "args": [
      5,
      5
    ],
    "expected": 70
  },
  {
    "args": [
      6,
      5
    ],
    "expected": 126
  },
  {
    "args": [
      7,
      5
    ],
    "expected": 210
  },
  {
    "args": [
      8,
      6
    ],
    "expected": 792
  },
  {
    "args": [
      1,
      6
    ],
    "expected": 1
  },
  {
    "args": [
      2,
      6
    ],
    "expected": 6
  },
  {
    "args": [
      3,
      7
    ],
    "expected": 28
  },
  {
    "args": [
      4,
      7
    ],
    "expected": 84
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(uniquePaths(...(args as any))).toEqual(expected);
});
