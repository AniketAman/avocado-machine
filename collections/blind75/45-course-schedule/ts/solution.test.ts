import {expect, test} from 'vitest';
import {canFinish} from './solution';

const cases = [
  {
    "args": [
      2,
      [
        [
          1,
          0
        ],
        [
          0,
          1
        ]
      ]
    ],
    "expected": false,
    "name": "baseline: [2,[[1,0],[0,1]]]"
  },
  {
    "name": "cycle blocks schedule",
    "args": [
      2,
      [
        [
          1,
          0
        ],
        [
          0,
          1
        ]
      ]
    ],
    "expected": false
  },
  {
    "name": "disconnected prerequisite chains are valid",
    "args": [
      4,
      [
        [
          1,
          0
        ],
        [
          3,
          2
        ]
      ]
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(canFinish(...(args as any))).toEqual(expected);
});
