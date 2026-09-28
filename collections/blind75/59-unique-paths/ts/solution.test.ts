import {expect, test} from 'vitest';
import {uniquePaths} from './solution';

const cases = [
  {
    "args": [
      1,
      1
    ],
    "expected": 1,
    "name": "baseline: [1,1]"
  },
  {
    "name": "single row has exactly one route",
    "args": [
      1,
      7
    ],
    "expected": 1
  },
  {
    "name": "three by three grid has six routes",
    "args": [
      3,
      3
    ],
    "expected": 6
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(uniquePaths(...(args as any))).toEqual(expected);
});
