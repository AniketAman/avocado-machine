import {expect, test} from 'vitest';
import {twoSum} from './solution';

const cases = [
  {
    "args": [
      [
        5,
        5
      ],
      10
    ],
    "expected": [
      0,
      1
    ],
    "name": "baseline: [[5,5],10]"
  },
  {
    "name": "negative complement after a prior duplicate",
    "args": [
      [
        3,
        3,
        -2,
        8
      ],
      6
    ],
    "expected": [
      0,
      1
    ]
  },
  {
    "name": "uses two distinct indices for equal values",
    "args": [
      [
        4,
        7,
        4
      ],
      8
    ],
    "expected": [
      0,
      2
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(twoSum(...(args as any))).toEqual(expected);
});
