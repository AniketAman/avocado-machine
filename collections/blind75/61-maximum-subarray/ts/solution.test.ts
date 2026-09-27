import {expect, test} from 'vitest';
import {maxSubArray} from './solution';

const cases = [
  {
    "args": [
      [
        -8
      ]
    ],
    "expected": -8
  },
  {
    "args": [
      [
        -3,
        4
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        2,
        -8,
        -1
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        7,
        -3,
        4,
        -6
      ]
    ],
    "expected": 8
  },
  {
    "args": [
      [
        -5,
        2,
        -8,
        -1,
        6
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        0,
        7,
        -3,
        4,
        -6,
        1
      ]
    ],
    "expected": 8
  },
  {
    "args": [
      [
        5,
        -5,
        2,
        -8,
        -1,
        6,
        -4
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        -7,
        0,
        7,
        -3,
        4,
        -6,
        1,
        8
      ]
    ],
    "expected": 11
  },
  {
    "args": [
      [
        -2,
        5,
        -5,
        2,
        -8,
        -1,
        6,
        -4,
        3
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        3,
        -7,
        0,
        7,
        -3,
        4,
        -6,
        1,
        8,
        -2
      ]
    ],
    "expected": 11
  },
  {
    "args": [
      [
        8
      ]
    ],
    "expected": 8
  },
  {
    "args": [
      [
        -4,
        3
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        1,
        8,
        -2
      ]
    ],
    "expected": 9
  },
  {
    "args": [
      [
        6,
        -4,
        3,
        -7
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        -6,
        1,
        8,
        -2,
        5
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -1,
        6,
        -4,
        3,
        -7,
        0
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        4,
        -6,
        1,
        8,
        -2,
        5,
        -5
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -8,
        -1,
        6,
        -4,
        3,
        -7,
        0,
        7
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        -3,
        4,
        -6,
        1,
        8,
        -2,
        5,
        -5,
        2
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        2,
        -8,
        -1,
        6,
        -4,
        3,
        -7,
        0,
        7,
        -3
      ]
    ],
    "expected": 7
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(maxSubArray(...(args as any))).toEqual(expected);
});
