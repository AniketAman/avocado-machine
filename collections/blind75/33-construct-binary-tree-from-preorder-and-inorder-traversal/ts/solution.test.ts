import {expect, test} from 'vitest';
import {buildTree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        1,
        2,
        3
      ],
      [
        2,
        1,
        3
      ]
    ],
    "expected": [
      1,
      2,
      3
    ]
  },
  {
    "args": [
      [
        2,
        4,
        5
      ],
      [
        2,
        5,
        4
      ]
    ],
    "expected": [
      2,
      null,
      4,
      5
    ]
  },
  {
    "args": [
      [
        3,
        4,
        7,
        5,
        8
      ],
      [
        4,
        7,
        3,
        8,
        5
      ]
    ],
    "expected": [
      3,
      4,
      5,
      null,
      7,
      8
    ]
  },
  {
    "args": [
      [
        4,
        -4,
        5
      ],
      [
        5,
        -4,
        4
      ]
    ],
    "expected": [
      4,
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
      ],
      [
        6,
        5,
        7
      ]
    ],
    "expected": [
      5,
      6,
      7
    ]
  },
  {
    "args": [
      [
        6,
        8,
        9
      ],
      [
        6,
        9,
        8
      ]
    ],
    "expected": [
      6,
      null,
      8,
      9
    ]
  },
  {
    "args": [
      [
        7,
        8,
        11,
        9,
        12
      ],
      [
        8,
        11,
        7,
        12,
        9
      ]
    ],
    "expected": [
      7,
      8,
      9,
      null,
      11,
      12
    ]
  },
  {
    "args": [
      [
        8,
        -8,
        9
      ],
      [
        9,
        -8,
        8
      ]
    ],
    "expected": [
      8,
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
      ],
      [
        10,
        9,
        11
      ]
    ],
    "expected": [
      9,
      10,
      11
    ]
  },
  {
    "args": [
      [
        10,
        12,
        13
      ],
      [
        10,
        13,
        12
      ]
    ],
    "expected": [
      10,
      null,
      12,
      13
    ]
  },
  {
    "args": [
      [
        11,
        12,
        15,
        13,
        16
      ],
      [
        12,
        15,
        11,
        16,
        13
      ]
    ],
    "expected": [
      11,
      12,
      13,
      null,
      15,
      16
    ]
  },
  {
    "args": [
      [
        12,
        -12,
        13
      ],
      [
        13,
        -12,
        12
      ]
    ],
    "expected": [
      12,
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
      ],
      [
        14,
        13,
        15
      ]
    ],
    "expected": [
      13,
      14,
      15
    ]
  },
  {
    "args": [
      [
        14,
        16,
        17
      ],
      [
        14,
        17,
        16
      ]
    ],
    "expected": [
      14,
      null,
      16,
      17
    ]
  },
  {
    "args": [
      [
        15,
        16,
        19,
        17,
        20
      ],
      [
        16,
        19,
        15,
        20,
        17
      ]
    ],
    "expected": [
      15,
      16,
      17,
      null,
      19,
      20
    ]
  },
  {
    "args": [
      [
        16,
        -16,
        17
      ],
      [
        17,
        -16,
        16
      ]
    ],
    "expected": [
      16,
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
      ],
      [
        18,
        17,
        19
      ]
    ],
    "expected": [
      17,
      18,
      19
    ]
  },
  {
    "args": [
      [
        18,
        20,
        21
      ],
      [
        18,
        21,
        20
      ]
    ],
    "expected": [
      18,
      null,
      20,
      21
    ]
  },
  {
    "args": [
      [
        19,
        20,
        23,
        21,
        24
      ],
      [
        20,
        23,
        19,
        24,
        21
      ]
    ],
    "expected": [
      19,
      20,
      21,
      null,
      23,
      24
    ]
  },
  {
    "args": [
      [
        20,
        -20,
        21
      ],
      [
        21,
        -20,
        20
      ]
    ],
    "expected": [
      20,
      -20,
      null,
      21
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(treeToArray(buildTree(args[0], args[1]))).toEqual(expected);
});
