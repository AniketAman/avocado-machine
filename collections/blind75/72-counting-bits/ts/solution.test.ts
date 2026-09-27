import {expect, test} from 'vitest';
import {countBits} from './solution';

const cases = [
  {
    "args": [
      0
    ],
    "expected": [
      0
    ]
  },
  {
    "args": [
      1
    ],
    "expected": [
      0,
      1
    ]
  },
  {
    "args": [
      2
    ],
    "expected": [
      0,
      1,
      1
    ]
  },
  {
    "args": [
      3
    ],
    "expected": [
      0,
      1,
      1,
      2
    ]
  },
  {
    "args": [
      4
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1
    ]
  },
  {
    "args": [
      5
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2
    ]
  },
  {
    "args": [
      6
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2
    ]
  },
  {
    "args": [
      7
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3
    ]
  },
  {
    "args": [
      8
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1
    ]
  },
  {
    "args": [
      9
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2
    ]
  },
  {
    "args": [
      10
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2
    ]
  },
  {
    "args": [
      11
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3
    ]
  },
  {
    "args": [
      12
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2
    ]
  },
  {
    "args": [
      13
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3
    ]
  },
  {
    "args": [
      14
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3
    ]
  },
  {
    "args": [
      15
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3,
      4
    ]
  },
  {
    "args": [
      16
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3,
      4,
      1
    ]
  },
  {
    "args": [
      17
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3,
      4,
      1,
      2
    ]
  },
  {
    "args": [
      18
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3,
      4,
      1,
      2,
      2
    ]
  },
  {
    "args": [
      19
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3,
      1,
      2,
      2,
      3,
      2,
      3,
      3,
      4,
      1,
      2,
      2,
      3
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(countBits(...(args as any))).toEqual(expected);
});
