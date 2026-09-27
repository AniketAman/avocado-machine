import {expect, test} from 'vitest';
import {lengthOfLIS} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        3,
        10
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        6,
        0,
        7
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        9,
        3,
        10,
        4
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        12,
        6,
        0,
        7,
        1
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        2,
        9,
        3,
        10,
        4,
        11
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        5,
        12,
        6,
        0,
        7,
        1,
        8
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        8,
        2,
        9,
        3,
        10,
        4,
        11,
        5
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        11,
        5,
        12,
        6,
        0,
        7,
        1,
        8,
        2
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        1,
        8,
        2,
        9,
        3,
        10,
        4,
        11,
        5,
        12
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        4
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        7,
        1
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        10,
        4,
        11
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        0,
        7,
        1,
        8
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        3,
        10,
        4,
        11,
        5
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        6,
        0,
        7,
        1,
        8,
        2
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        9,
        3,
        10,
        4,
        11,
        5,
        12
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        12,
        6,
        0,
        7,
        1,
        8,
        2,
        9
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        2,
        9,
        3,
        10,
        4,
        11,
        5,
        12,
        6
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        5,
        12,
        6,
        0,
        7,
        1,
        8,
        2,
        9,
        3
      ]
    ],
    "expected": 5
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(lengthOfLIS(...(args as any))).toEqual(expected);
});
