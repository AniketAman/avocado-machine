import {expect, test} from 'vitest';
import {countComponents} from './solution';

const cases = [
  {
    "args": [
      1,
      []
    ],
    "expected": 1,
    "name": "baseline: [1,[]]"
  },
  {
    "name": "cycle contributes one component",
    "args": [
      5,
      [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          0
        ],
        [
          3,
          4
        ]
      ]
    ],
    "expected": 2
  },
  {
    "name": "no edges means one component per vertex",
    "args": [
      4,
      []
    ],
    "expected": 4
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(countComponents(...(args as any))).toEqual(expected);
});
