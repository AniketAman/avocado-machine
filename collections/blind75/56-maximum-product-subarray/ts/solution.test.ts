import {expect, test} from 'vitest';
import {maxProduct} from './solution';

const cases = [
  {
    "args": [
      [
        -3
      ]
    ],
    "expected": -3
  },
  {
    "args": [
      [
        -2,
        1
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        -1,
        2,
        -2
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        0,
        3,
        -1,
        2
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        1,
        -3,
        0,
        3,
        -1
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        2,
        -2,
        1,
        -3,
        0,
        3
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        3,
        -1,
        2,
        -2,
        1,
        -3,
        0
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -3,
        0,
        3,
        -1,
        2,
        -2,
        1,
        -3
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -2
      ]
    ],
    "expected": -2
  },
  {
    "args": [
      [
        -1,
        2
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        0,
        3,
        -1
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        1,
        -3,
        0,
        3
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        2,
        -2,
        1,
        -3,
        0
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        3,
        -1,
        2,
        -2,
        1,
        -3
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -3,
        0,
        3,
        -1,
        2,
        -2,
        1
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -2,
        1,
        -3,
        0,
        3,
        -1,
        2,
        -2
      ]
    ],
    "expected": 12
  },
  {
    "args": [
      [
        -1
      ]
    ],
    "expected": -1
  },
  {
    "args": [
      [
        0,
        3
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        1,
        -3,
        0
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        2,
        -2,
        1,
        -3
      ]
    ],
    "expected": 12
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(maxProduct(...(args as any))).toEqual(expected);
});
