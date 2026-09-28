import {expect, test} from 'vitest';
import {spiralOrder} from './solution';

const cases = [
  {
    "args": [
      [
        [
          0
        ]
      ]
    ],
    "expected": [
      0
    ],
    "name": "baseline: [[[0]]]"
  },
  {
    "name": "single row never revisits a cell",
    "args": [
      [
        [
          1,
          2,
          3
        ]
      ]
    ],
    "expected": [
      1,
      2,
      3
    ]
  },
  {
    "name": "rectangular matrix changes boundaries",
    "args": [
      [
        [
          1,
          2,
          3
        ],
        [
          4,
          5,
          6
        ]
      ]
    ],
    "expected": [
      1,
      2,
      3,
      6,
      5,
      4
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(spiralOrder(...(args as any))).toEqual(expected);
});
