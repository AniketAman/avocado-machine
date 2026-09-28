import {expect, test} from 'vitest';
import {setZeroes} from './solution';

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
    "name": "first row zero clears its column and row",
    "args": [
      [
        [
          1,
          0,
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
        0,
        0,
        0
      ],
      [
        4,
        0,
        6
      ],
      [
        7,
        0,
        9
      ]
    ]
  },
  {
    "name": "independent zeroes propagate without cascading",
    "args": [
      [
        [
          1,
          2,
          3
        ],
        [
          4,
          0,
          6
        ],
        [
          0,
          8,
          9
        ]
      ]
    ],
    "expected": [
      [
        0,
        0,
        3
      ],
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        0
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    setZeroes(...(args as [any]));
    expect(args[0]).toEqual(expected);
});
