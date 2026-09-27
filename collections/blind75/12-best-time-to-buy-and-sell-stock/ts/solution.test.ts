import {expect, test} from 'vitest';
import {maxProfit} from './solution';

const cases = [
  {
    "args": [
      [
        10,
        8,
        7,
        5,
        2
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        3,
        10
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        6,
        13,
        3
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        9,
        16,
        6,
        13
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        12,
        2,
        9,
        16,
        6
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        15,
        5,
        12,
        2,
        9,
        16
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        1,
        8,
        15,
        5,
        12,
        2,
        9
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        4,
        11,
        1,
        8,
        15,
        5,
        12,
        2
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        7,
        14,
        4,
        11,
        1,
        8,
        15,
        5,
        12
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        10,
        0,
        7,
        14,
        4,
        11,
        1,
        8,
        15,
        5
      ]
    ],
    "expected": 15
  },
  {
    "args": [
      [
        13
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        16,
        6
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        2,
        9,
        16
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        5,
        12,
        2,
        9
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        8,
        15,
        5,
        12,
        2
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        11,
        1,
        8,
        15,
        5,
        12
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        14,
        4,
        11,
        1,
        8,
        15,
        5
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        0,
        7,
        14,
        4,
        11,
        1,
        8,
        15
      ]
    ],
    "expected": 15
  },
  {
    "args": [
      [
        3,
        10,
        0,
        7,
        14,
        4,
        11,
        1,
        8
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        6,
        13,
        3,
        10,
        0,
        7,
        14,
        4,
        11,
        1
      ]
    ],
    "expected": 14
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(maxProfit(...(args as any))).toEqual(expected);
});
