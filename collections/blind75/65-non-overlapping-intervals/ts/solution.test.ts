import {expect, test} from 'vitest';
import {eraseOverlapIntervals} from './solution';

const cases = [
  {
    "args": [
      [
        [
          0,
          1
        ]
      ]
    ],
    "expected": 0,
    "name": "baseline: [[[0,1]]]"
  },
  {
    "name": "touching intervals do not overlap",
    "args": [
      [
        [
          1,
          2
        ],
        [
          2,
          3
        ]
      ]
    ],
    "expected": 0
  },
  {
    "name": "choose short intervals over one long interval",
    "args": [
      [
        [
          1,
          10
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ]
      ]
    ],
    "expected": 1
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(eraseOverlapIntervals(...(args as any))).toEqual(expected);
});
