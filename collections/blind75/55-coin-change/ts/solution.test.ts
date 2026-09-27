import {expect, test} from 'vitest';
import {coinChange} from './solution';

const cases = [
  {
    "args": [
      [
        1
      ],
      0
    ],
    "expected": 0
  },
  {
    "args": [
      [
        3,
        4,
        8
      ],
      2
    ],
    "expected": -1
  },
  {
    "args": [
      [
        4,
        5,
        9
      ],
      3
    ],
    "expected": -1
  },
  {
    "args": [
      [
        5,
        6,
        7
      ],
      4
    ],
    "expected": -1
  },
  {
    "args": [
      [
        2,
        7,
        8
      ],
      5
    ],
    "expected": -1
  },
  {
    "args": [
      [
        3,
        3,
        9
      ],
      6
    ],
    "expected": 2
  },
  {
    "args": [
      [
        4,
        4,
        7
      ],
      7
    ],
    "expected": 1
  },
  {
    "args": [
      [
        5,
        5,
        8
      ],
      8
    ],
    "expected": 1
  },
  {
    "args": [
      [
        2,
        6,
        9
      ],
      9
    ],
    "expected": 1
  },
  {
    "args": [
      [
        3,
        7,
        7
      ],
      10
    ],
    "expected": 2
  },
  {
    "args": [
      [
        4,
        3,
        8
      ],
      11
    ],
    "expected": 2
  },
  {
    "args": [
      [
        5,
        4,
        9
      ],
      12
    ],
    "expected": 3
  },
  {
    "args": [
      [
        2,
        5,
        7
      ],
      13
    ],
    "expected": 4
  },
  {
    "args": [
      [
        3,
        6,
        8
      ],
      14
    ],
    "expected": 2
  },
  {
    "args": [
      [
        4,
        7,
        9
      ],
      15
    ],
    "expected": 3
  },
  {
    "args": [
      [
        5,
        3,
        7
      ],
      16
    ],
    "expected": 4
  },
  {
    "args": [
      [
        2,
        4,
        8
      ],
      17
    ],
    "expected": -1
  },
  {
    "args": [
      [
        3,
        5,
        9
      ],
      18
    ],
    "expected": 2
  },
  {
    "args": [
      [
        4,
        6,
        7
      ],
      19
    ],
    "expected": 3
  },
  {
    "args": [
      [
        5,
        7,
        8
      ],
      20
    ],
    "expected": 3
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(coinChange(...(args as any))).toEqual(expected);
});
