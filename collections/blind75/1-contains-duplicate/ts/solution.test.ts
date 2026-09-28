import {expect, test} from 'vitest';
import {containsDuplicate} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": false,
    "name": "baseline: [[]]"
  },
  {
    "name": "duplicate zero among distinct values",
    "args": [
      [
        0,
        1,
        2,
        0
      ]
    ],
    "expected": true
  },
  {
    "name": "negative and positive values are distinct",
    "args": [
      [
        -1,
        1,
        0
      ]
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(containsDuplicate(...(args as any))).toEqual(expected);
});
