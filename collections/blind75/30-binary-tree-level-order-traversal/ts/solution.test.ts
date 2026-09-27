import {expect, test} from 'vitest';
import {levelOrder} from './solution';
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
      [
        1
      ],
      [
        2,
        3
      ]
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
      [
        2
      ],
      [
        4
      ],
      [
        5
      ]
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
      [
        3
      ],
      [
        4,
        5
      ],
      [
        7,
        8
      ]
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
      [
        4
      ],
      [
        -4
      ],
      [
        5
      ]
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
      [
        5
      ],
      [
        6,
        7
      ]
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
      [
        6
      ],
      [
        8
      ],
      [
        9
      ]
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
      [
        7
      ],
      [
        8,
        9
      ],
      [
        11,
        12
      ]
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
      [
        8
      ],
      [
        -8
      ],
      [
        9
      ]
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
      [
        9
      ],
      [
        10,
        11
      ]
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
      [
        10
      ],
      [
        12
      ],
      [
        13
      ]
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
      [
        11
      ],
      [
        12,
        13
      ],
      [
        15,
        16
      ]
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
      [
        12
      ],
      [
        -12
      ],
      [
        13
      ]
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
      [
        13
      ],
      [
        14,
        15
      ]
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
      [
        14
      ],
      [
        16
      ],
      [
        17
      ]
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
      [
        15
      ],
      [
        16,
        17
      ],
      [
        19,
        20
      ]
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
      [
        16
      ],
      [
        -16
      ],
      [
        17
      ]
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
      [
        17
      ],
      [
        18,
        19
      ]
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
      [
        18
      ],
      [
        20
      ],
      [
        21
      ]
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
      [
        19
      ],
      [
        20,
        21
      ],
      [
        23,
        24
      ]
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(levelOrder(treeFrom(args[0]))).toEqual(expected);
});
