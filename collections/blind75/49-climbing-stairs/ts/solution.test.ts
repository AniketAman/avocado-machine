import {expect, test} from 'vitest';
import {climbStairs} from './solution';

const cases = [
  {
    "args": [
      1
    ],
    "expected": 1,
    "name": "baseline: [1]"
  },
  {
    "name": "two ways to climb two steps",
    "args": [
      2
    ],
    "expected": 2
  },
  {
    "name": "five steps follow recurrence",
    "args": [
      5
    ],
    "expected": 8
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(climbStairs(...(args as any))).toEqual(expected);
});
