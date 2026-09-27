import {expect, test} from 'vitest';
import {maxArea} from './solution';

const cases = [
  {
    "args": [
      [
        0,
        7
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        3,
        10,
        6
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        6,
        2,
        9,
        5
      ]
    ],
    "expected": 15
  },
  {
    "args": [
      [
        9,
        5,
        1,
        8,
        4
      ]
    ],
    "expected": 24
  },
  {
    "args": [
      [
        1,
        8,
        4,
        0,
        7,
        3
      ]
    ],
    "expected": 21
  },
  {
    "args": [
      [
        4,
        0,
        7,
        3,
        10,
        6,
        2
      ]
    ],
    "expected": 20
  },
  {
    "args": [
      [
        7,
        3,
        10,
        6,
        2,
        9,
        5,
        1
      ]
    ],
    "expected": 35
  },
  {
    "args": [
      [
        10,
        6,
        2,
        9,
        5,
        1,
        8,
        4,
        0
      ]
    ],
    "expected": 48
  },
  {
    "args": [
      [
        2,
        9
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        5,
        1,
        8
      ]
    ],
    "expected": 10
  },
  {
    "args": [
      [
        8,
        4,
        0,
        7
      ]
    ],
    "expected": 21
  },
  {
    "args": [
      [
        0,
        7,
        3,
        10,
        6
      ]
    ],
    "expected": 18
  },
  {
    "args": [
      [
        3,
        10,
        6,
        2,
        9,
        5
      ]
    ],
    "expected": 27
  },
  {
    "args": [
      [
        6,
        2,
        9,
        5,
        1,
        8,
        4
      ]
    ],
    "expected": 30
  },
  {
    "args": [
      [
        9,
        5,
        1,
        8,
        4,
        0,
        7,
        3
      ]
    ],
    "expected": 42
  },
  {
    "args": [
      [
        1,
        8,
        4,
        0,
        7,
        3,
        10,
        6,
        2
      ]
    ],
    "expected": 40
  },
  {
    "args": [
      [
        4,
        0
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        7,
        3,
        10
      ]
    ],
    "expected": 14
  },
  {
    "args": [
      [
        10,
        6,
        2,
        9
      ]
    ],
    "expected": 27
  },
  {
    "args": [
      [
        2,
        9,
        5,
        1,
        8
      ]
    ],
    "expected": 24
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(maxArea(...(args as any))).toEqual(expected);
});
