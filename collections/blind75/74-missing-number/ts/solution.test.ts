import {expect, test} from 'vitest';
import {missingNumber} from './solution';

const cases = [
  {
    "args": [
      [
        1
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        0,
        2,
        3
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        0,
        1,
        2,
        4,
        5,
        6
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    ],
    "expected": 8
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        5,
        6,
        7,
        8,
        9
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    ],
    "expected": 11
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9,
        10,
        11,
        12
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      ]
    ],
    "expected": 17
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18
      ]
    ],
    "expected": 9
  },
  {
    "args": [
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ]
    ],
    "expected": 20
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(missingNumber(...(args as any))).toEqual(expected);
});
