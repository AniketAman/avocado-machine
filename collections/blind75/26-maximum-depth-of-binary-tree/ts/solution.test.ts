import {expect, test} from 'vitest';
import {maxDepth} from './solution';
import {treeFrom, treeToArray} from '../../support';

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
        2,
        3
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        2,
        null,
        4,
        5
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
        null,
        7,
        8,
        null
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        4,
        -4,
        null,
        5
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        5,
        6,
        7
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        6,
        null,
        8,
        9
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        7,
        8,
        9,
        null,
        11,
        12,
        null
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        8,
        -8,
        null,
        9
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        9,
        10,
        11
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        10,
        null,
        12,
        13
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        11,
        12,
        13,
        null,
        15,
        16,
        null
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        12,
        -12,
        null,
        13
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        13,
        14,
        15
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        14,
        null,
        16,
        17
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
        null,
        19,
        20,
        null
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        16,
        -16,
        null,
        17
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        17,
        18,
        19
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        18,
        null,
        20,
        21
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        19,
        20,
        21,
        null,
        23,
        24,
        null
      ]
    ],
    "expected": 3
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(maxDepth(treeFrom(args[0]))).toEqual(expected);
});
