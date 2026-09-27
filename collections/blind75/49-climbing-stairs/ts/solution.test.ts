import {expect, test} from 'vitest';
import {climbStairs} from './solution';

const cases = [
  {
    "args": [
      1
    ],
    "expected": 1
  },
  {
    "args": [
      2
    ],
    "expected": 2
  },
  {
    "args": [
      3
    ],
    "expected": 3
  },
  {
    "args": [
      4
    ],
    "expected": 5
  },
  {
    "args": [
      5
    ],
    "expected": 8
  },
  {
    "args": [
      6
    ],
    "expected": 13
  },
  {
    "args": [
      7
    ],
    "expected": 21
  },
  {
    "args": [
      8
    ],
    "expected": 34
  },
  {
    "args": [
      9
    ],
    "expected": 55
  },
  {
    "args": [
      10
    ],
    "expected": 89
  },
  {
    "args": [
      11
    ],
    "expected": 144
  },
  {
    "args": [
      12
    ],
    "expected": 233
  },
  {
    "args": [
      13
    ],
    "expected": 377
  },
  {
    "args": [
      14
    ],
    "expected": 610
  },
  {
    "args": [
      15
    ],
    "expected": 987
  },
  {
    "args": [
      16
    ],
    "expected": 1597
  },
  {
    "args": [
      17
    ],
    "expected": 2584
  },
  {
    "args": [
      18
    ],
    "expected": 4181
  },
  {
    "args": [
      19
    ],
    "expected": 6765
  },
  {
    "args": [
      45
    ],
    "expected": 1836311903
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(climbStairs(...(args as any))).toEqual(expected);
});
