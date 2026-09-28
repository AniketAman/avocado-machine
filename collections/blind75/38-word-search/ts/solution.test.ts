import {expect, test} from 'vitest';
import {exist} from './solution';

const cases = [
  {
    "args": [
      [
        [
          "A"
        ]
      ],
      "A"
    ],
    "expected": true,
    "name": "baseline: [[[\"A\"]],\"A\"]"
  },
  {
    "name": "cannot revisit one board cell",
    "args": [
      [
        [
          "A",
          "B"
        ],
        [
          "C",
          "D"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "name": "orthogonal turns are allowed",
    "args": [
      [
        [
          "A",
          "B"
        ],
        [
          "C",
          "D"
        ]
      ],
      "ABD"
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(exist(...(args as any))).toEqual(expected);
});
