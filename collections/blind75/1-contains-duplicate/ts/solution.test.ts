import {expect, test} from 'vitest';
import {containsDuplicate} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        1
      ]
    ],
    "expected": true
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
    "expected": false
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
        1
      ]
    ],
    "expected": true
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
        2
      ]
    ],
    "expected": true
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
        2
      ]
    ],
    "expected": true
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
        8
      ]
    ],
    "expected": false
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
        3
      ]
    ],
    "expected": true
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
        3
      ]
    ],
    "expected": true
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
        3
      ]
    ],
    "expected": true
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
        12
      ]
    ],
    "expected": false
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
        4
      ]
    ],
    "expected": true
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
        4
      ]
    ],
    "expected": true
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
        5
      ]
    ],
    "expected": true
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
    "expected": false
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
        5
      ]
    ],
    "expected": true
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
        6
      ]
    ],
    "expected": true
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
        19,
        6
      ]
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(containsDuplicate(...(args as any))).toEqual(expected);
});
