import {expect, test} from 'vitest';
import {invertTree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      []
    ],
    "expected": []
  },
  {
    "args": [
      [
        1,
        2,
        3
      ]
    ],
    "expected": [
      1,
      3,
      2
    ]
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
    "expected": [
      2,
      4,
      null,
      null,
      5
    ]
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
    "expected": [
      3,
      5,
      4,
      null,
      8,
      7
    ]
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
    "expected": [
      4,
      null,
      -4,
      null,
      5
    ]
  },
  {
    "args": [
      [
        5,
        6,
        7
      ]
    ],
    "expected": [
      5,
      7,
      6
    ]
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
    "expected": [
      6,
      8,
      null,
      null,
      9
    ]
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
    "expected": [
      7,
      9,
      8,
      null,
      12,
      11
    ]
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
    "expected": [
      8,
      null,
      -8,
      null,
      9
    ]
  },
  {
    "args": [
      [
        9,
        10,
        11
      ]
    ],
    "expected": [
      9,
      11,
      10
    ]
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
    "expected": [
      10,
      12,
      null,
      null,
      13
    ]
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
    "expected": [
      11,
      13,
      12,
      null,
      16,
      15
    ]
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
    "expected": [
      12,
      null,
      -12,
      null,
      13
    ]
  },
  {
    "args": [
      [
        13,
        14,
        15
      ]
    ],
    "expected": [
      13,
      15,
      14
    ]
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
    "expected": [
      14,
      16,
      null,
      null,
      17
    ]
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
    "expected": [
      15,
      17,
      16,
      null,
      20,
      19
    ]
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
    "expected": [
      16,
      null,
      -16,
      null,
      17
    ]
  },
  {
    "args": [
      [
        17,
        18,
        19
      ]
    ],
    "expected": [
      17,
      19,
      18
    ]
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
    "expected": [
      18,
      20,
      null,
      null,
      21
    ]
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
    "expected": [
      19,
      21,
      20,
      null,
      24,
      23
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(treeToArray(invertTree(treeFrom(args[0])))).toEqual(expected);
});
