import {expect, test} from 'vitest';
import {isSubtree} from './solution';
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
        1,
        2,
        3
      ]
    ],
    "expected": true
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
        3
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
        1001
      ]
    ],
    "expected": false
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
        4,
        -4,
        null,
        5
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        5,
        6,
        7
      ],
      [
        6
      ]
    ],
    "expected": true
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
        1004
      ]
    ],
    "expected": false
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
        7,
        8,
        9,
        null,
        11,
        12,
        null
      ]
    ],
    "expected": true
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
        9
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        9,
        10,
        11
      ],
      [
        1007
      ]
    ],
    "expected": false
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
        10,
        null,
        12,
        13
      ]
    ],
    "expected": true
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
        12
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
        1010
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        13,
        14,
        15
      ],
      [
        13,
        14,
        15
      ]
    ],
    "expected": true
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
        15
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
        1013
      ]
    ],
    "expected": false
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
        16,
        -16,
        null,
        17
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        17,
        18,
        19
      ],
      [
        18
      ]
    ],
    "expected": true
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
        1016
      ]
    ],
    "expected": false
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
        19,
        20,
        21,
        null,
        23,
        24,
        null
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        20,
        -20,
        null,
        21
      ],
      [
        21
      ]
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(isSubtree(treeFrom(args[0]), treeFrom(args[1]))).toBe(expected);
});
