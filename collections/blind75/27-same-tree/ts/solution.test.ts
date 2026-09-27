import {expect, test} from 'vitest';
import {isSameTree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [],
      []
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2,
        3
      ],
      [
        2,
        null,
        4,
        5
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        2,
        null,
        4,
        5
      ],
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
    "expected": false
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
      ],
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
    "expected": true
  },
  {
    "args": [
      [
        4,
        -4,
        null,
        5
      ],
      [
        5,
        6,
        7
      ]
    ],
    "expected": false
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
        null,
        8,
        9
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        6,
        null,
        8,
        9
      ],
      [
        6,
        null,
        8,
        9
      ]
    ],
    "expected": true
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
      ],
      [
        8,
        -8,
        null,
        9
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        8,
        -8,
        null,
        9
      ],
      [
        9,
        10,
        11
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        9,
        10,
        11
      ],
      [
        9,
        10,
        11
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        10,
        null,
        12,
        13
      ],
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
    "expected": false
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
      ],
      [
        12,
        -12,
        null,
        13
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        12,
        -12,
        null,
        13
      ],
      [
        12,
        -12,
        null,
        13
      ]
    ],
    "expected": true
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
        null,
        16,
        17
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        14,
        null,
        16,
        17
      ],
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
    "expected": false
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
      ],
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
    "expected": true
  },
  {
    "args": [
      [
        16,
        -16,
        null,
        17
      ],
      [
        17,
        18,
        19
      ]
    ],
    "expected": false
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
        null,
        20,
        21
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        18,
        null,
        20,
        21
      ],
      [
        18,
        null,
        20,
        21
      ]
    ],
    "expected": true
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
      ],
      [
        20,
        -20,
        null,
        21
      ]
    ],
    "expected": false
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(isSameTree(treeFrom(args[0]), treeFrom(args[1]))).toBe(expected);
});
