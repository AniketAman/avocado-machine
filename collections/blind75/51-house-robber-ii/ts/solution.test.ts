import {expect, test} from 'vitest';
import {rob} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        7,
        12
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        1,
        6,
        11
      ]
    ],
    "expected": 11
  },
  {
    "args": [
      [
        8,
        0,
        5,
        10
      ]
    ],
    "expected": 13
  },
  {
    "args": [
      [
        2,
        7,
        12,
        4,
        9
      ]
    ],
    "expected": 21
  },
  {
    "args": [
      [
        9,
        1,
        6,
        11,
        3,
        8
      ]
    ],
    "expected": 20
  },
  {
    "args": [
      [
        3,
        8,
        0,
        5,
        10,
        2,
        7
      ]
    ],
    "expected": 25
  },
  {
    "args": [
      [
        10,
        2,
        7,
        12,
        4,
        9,
        1,
        6
      ]
    ],
    "expected": 31
  },
  {
    "args": [
      [
        4,
        9,
        1,
        6,
        11,
        3,
        8,
        0,
        5
      ]
    ],
    "expected": 33
  },
  {
    "args": [
      [
        11,
        3,
        8,
        0,
        5,
        10,
        2,
        7,
        12,
        4
      ]
    ],
    "expected": 41
  },
  {
    "args": [
      [
        5
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        12,
        4
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        6,
        11,
        3
      ]
    ],
    "expected": 11
  },
  {
    "args": [
      [
        0,
        5,
        10,
        2
      ]
    ],
    "expected": 10
  },
  {
    "args": [
      [
        7,
        12,
        4,
        9,
        1
      ]
    ],
    "expected": 21
  },
  {
    "args": [
      [
        1,
        6,
        11,
        3,
        8,
        0
      ]
    ],
    "expected": 20
  },
  {
    "args": [
      [
        8,
        0,
        5,
        10,
        2,
        7,
        12
      ]
    ],
    "expected": 25
  },
  {
    "args": [
      [
        2,
        7,
        12,
        4,
        9,
        1,
        6,
        11
      ]
    ],
    "expected": 32
  },
  {
    "args": [
      [
        9,
        1,
        6,
        11,
        3,
        8,
        0,
        5,
        10
      ]
    ],
    "expected": 33
  },
  {
    "args": [
      [
        3,
        8,
        0,
        5,
        10,
        2,
        7,
        12,
        4,
        9
      ]
    ],
    "expected": 39
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(rob(...(args as any))).toEqual(expected);
});
