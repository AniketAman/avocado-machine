import {expect, test} from 'vitest';
import {productExceptSelf} from './solution';

const cases = [
  {
    "args": [
      [
        0,
        -1
      ]
    ],
    "expected": [
      -1,
      0
    ]
  },
  {
    "args": [
      [
        -1,
        0,
        1
      ]
    ],
    "expected": [
      0,
      -1,
      0
    ]
  },
  {
    "args": [
      [
        0,
        1,
        2,
        -2
      ]
    ],
    "expected": [
      -4,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        1,
        2,
        -2,
        0,
        0
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        2,
        -2,
        -1,
        0,
        1,
        2
      ]
    ],
    "expected": [
      0,
      0,
      0,
      8,
      0,
      0
    ]
  },
  {
    "args": [
      [
        -2,
        -1,
        0,
        1,
        2,
        -2,
        -1
      ]
    ],
    "expected": [
      0,
      0,
      8,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        -1,
        0,
        1,
        2,
        -2,
        -1,
        0,
        1
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        0,
        1
      ]
    ],
    "expected": [
      1,
      0
    ]
  },
  {
    "args": [
      [
        1,
        2,
        -2
      ]
    ],
    "expected": [
      -4,
      -2,
      2
    ]
  },
  {
    "args": [
      [
        2,
        -2,
        0,
        0
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        -2,
        -1,
        0,
        1,
        2
      ]
    ],
    "expected": [
      0,
      0,
      4,
      0,
      0
    ]
  },
  {
    "args": [
      [
        -1,
        0,
        1,
        2,
        -2,
        -1
      ]
    ],
    "expected": [
      0,
      -4,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        0,
        1,
        2,
        -2,
        -1,
        0,
        1
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        1,
        2,
        -2,
        -1,
        0,
        1,
        2,
        -2
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        2,
        -2
      ]
    ],
    "expected": [
      -2,
      2
    ]
  },
  {
    "args": [
      [
        -2,
        0,
        0
      ]
    ],
    "expected": [
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        -1,
        0,
        1,
        2
      ]
    ],
    "expected": [
      0,
      -2,
      0,
      0
    ]
  },
  {
    "args": [
      [
        0,
        1,
        2,
        -2,
        -1
      ]
    ],
    "expected": [
      4,
      0,
      0,
      0,
      0
    ]
  },
  {
    "args": [
      [
        1,
        2,
        -2,
        -1,
        0,
        1
      ]
    ],
    "expected": [
      0,
      0,
      0,
      0,
      4,
      0
    ]
  },
  {
    "args": [
      [
        2,
        -2,
        -1,
        0,
        1,
        2,
        -2
      ]
    ],
    "expected": [
      0,
      0,
      0,
      -16,
      0,
      0,
      0
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(productExceptSelf(...(args as any))).toEqual(expected);
});
