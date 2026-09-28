import {expect, test} from 'vitest';
import {coinChange} from './solution';

const cases = [
  {
    "args": [
      [
        1
      ],
      0
    ],
    "expected": 0,
    "name": "baseline: [[1],0]"
  },
  {
    "name": "greedy largest coin is suboptimal",
    "args": [
      [
        1,
        3,
        4
      ],
      6
    ],
    "expected": 2
  },
  {
    "name": "unreachable amount",
    "args": [
      [
        2
      ],
      3
    ],
    "expected": -1
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(coinChange(...(args as any))).toEqual(expected);
});
