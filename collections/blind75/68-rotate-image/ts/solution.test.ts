import {expect, test} from 'vitest';
import {rotate} from './solution';

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
      [
        0
      ]
    ],
    "name": "baseline: [[[0]]]"
  },
  {
    "name": "two by two rotation changes every corner",
    "args": [
      [
        [
          1,
          2
        ],
        [
          3,
          4
        ]
      ]
    ],
    "expected": [
      [
        3,
        1
      ],
      [
        4,
        2
      ]
    ]
  },
  {
    "name": "three by three rotates center in place",
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
        ],
        [
          7,
          8,
          9
        ]
      ]
    ],
    "expected": [
      [
        7,
        4,
        1
      ],
      [
        8,
        5,
        2
      ],
      [
        9,
        6,
        3
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    rotate(...(args as [any]));
    expect(args[0]).toEqual(expected);
});
