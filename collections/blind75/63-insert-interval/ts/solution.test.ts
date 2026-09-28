import {expect, test} from 'vitest';
import {insert} from './solution';

const cases = [
  {
    "args": [
      [],
      [
        0,
        2
      ]
    ],
    "expected": [
      [
        0,
        2
      ]
    ],
    "name": "baseline: [[],[0,2]]"
  },
  {
    "name": "new interval joins touching neighbors",
    "args": [
      [
        [
          1,
          2
        ],
        [
          5,
          6
        ]
      ],
      [
        2,
        5
      ]
    ],
    "expected": [
      [
        1,
        6
      ]
    ]
  },
  {
    "name": "new interval fits in an interior gap",
    "args": [
      [
        [
          1,
          2
        ],
        [
          5,
          6
        ]
      ],
      [
        3,
        4
      ]
    ],
    "expected": [
      [
        1,
        2
      ],
      [
        3,
        4
      ],
      [
        5,
        6
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(insert(...(args as any))).toEqual(expected);
});
