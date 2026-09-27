import {expect, test} from 'vitest';
import {longestConsecutive} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": 0
  },
  {
    "args": [
      [
        1,
        31,
        33,
        32,
        32
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        2,
        3,
        32,
        34,
        33,
        33
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        3,
        4,
        5,
        33,
        35,
        34,
        34
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        4,
        5,
        6,
        7,
        34,
        36,
        35,
        35
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        5,
        6,
        7,
        8,
        9,
        35,
        37,
        36,
        36
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        6,
        7,
        8,
        9,
        10,
        11,
        36,
        38,
        37,
        37
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        37,
        39,
        38,
        38
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        38,
        40,
        39,
        39
      ]
    ],
    "expected": 8
  },
  {
    "args": [
      [
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        39,
        41,
        40,
        40
      ]
    ],
    "expected": 9
  },
  {
    "args": [
      [
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
        40,
        42,
        41,
        41
      ]
    ],
    "expected": 10
  },
  {
    "args": [
      [
        41,
        43,
        42,
        42
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        12,
        42,
        44,
        43,
        43
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        13,
        14,
        43,
        45,
        44,
        44
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        14,
        15,
        16,
        44,
        46,
        45,
        45
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        15,
        16,
        17,
        18,
        45,
        47,
        46,
        46
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        16,
        17,
        18,
        19,
        20,
        46,
        48,
        47,
        47
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        17,
        18,
        19,
        20,
        21,
        22,
        47,
        49,
        48,
        48
      ]
    ],
    "expected": 6
  },
  {
    "args": [
      [
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        48,
        50,
        49,
        49
      ]
    ],
    "expected": 7
  },
  {
    "args": [
      [
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        49,
        51,
        50,
        50
      ]
    ],
    "expected": 8
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(longestConsecutive(...(args as any))).toEqual(expected);
});
