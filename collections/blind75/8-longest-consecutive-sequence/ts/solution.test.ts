import {expect, test} from 'vitest';
import {longestConsecutive} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": 0,
    "name": "baseline: [[]]"
  },
  {
    "name": "duplicates do not extend a run",
    "args": [
      [
        1,
        2,
        2,
        3,
        10
      ]
    ],
    "expected": 3
  },
  {
    "name": "run crosses zero in unsorted input",
    "args": [
      [
        2,
        -1,
        1,
        0,
        -2
      ]
    ],
    "expected": 5
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(longestConsecutive(...(args as any))).toEqual(expected);
});
