import {expect, test} from 'vitest';
import {eraseOverlapIntervals} from './solution';

const cases = [
  {
    "args": [
      [
        [
          0,
          1
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          1,
          2
        ],
        [
          4,
          6
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          2,
          3
        ],
        [
          5,
          7
        ],
        [
          8,
          11
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          3,
          4
        ],
        [
          6,
          8
        ],
        [
          9,
          12
        ],
        [
          0,
          4
        ]
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        [
          4,
          5
        ],
        [
          7,
          9
        ],
        [
          10,
          13
        ],
        [
          1,
          5
        ],
        [
          4,
          5
        ]
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        [
          5,
          6
        ],
        [
          8,
          10
        ],
        [
          11,
          14
        ],
        [
          2,
          6
        ],
        [
          5,
          6
        ],
        [
          8,
          10
        ]
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        [
          6,
          7
        ],
        [
          9,
          11
        ],
        [
          0,
          3
        ],
        [
          3,
          7
        ],
        [
          6,
          7
        ],
        [
          9,
          11
        ],
        [
          0,
          3
        ]
      ]
    ],
    "expected": 4
  },
  {
    "args": [
      [
        [
          7,
          8
        ],
        [
          10,
          12
        ],
        [
          1,
          4
        ],
        [
          4,
          8
        ],
        [
          7,
          8
        ],
        [
          10,
          12
        ],
        [
          1,
          4
        ],
        [
          4,
          8
        ]
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        [
          8,
          9
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          9,
          10
        ],
        [
          0,
          2
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          10,
          11
        ],
        [
          1,
          3
        ],
        [
          4,
          7
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          11,
          12
        ],
        [
          2,
          4
        ],
        [
          5,
          8
        ],
        [
          8,
          12
        ]
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        [
          0,
          1
        ],
        [
          3,
          5
        ],
        [
          6,
          9
        ],
        [
          9,
          13
        ],
        [
          0,
          1
        ]
      ]
    ],
    "expected": 1
  },
  {
    "args": [
      [
        [
          1,
          2
        ],
        [
          4,
          6
        ],
        [
          7,
          10
        ],
        [
          10,
          14
        ],
        [
          1,
          2
        ],
        [
          4,
          6
        ]
      ]
    ],
    "expected": 2
  },
  {
    "args": [
      [
        [
          2,
          3
        ],
        [
          5,
          7
        ],
        [
          8,
          11
        ],
        [
          11,
          15
        ],
        [
          2,
          3
        ],
        [
          5,
          7
        ],
        [
          8,
          11
        ]
      ]
    ],
    "expected": 3
  },
  {
    "args": [
      [
        [
          3,
          4
        ],
        [
          6,
          8
        ],
        [
          9,
          12
        ],
        [
          0,
          4
        ],
        [
          3,
          4
        ],
        [
          6,
          8
        ],
        [
          9,
          12
        ],
        [
          0,
          4
        ]
      ]
    ],
    "expected": 5
  },
  {
    "args": [
      [
        [
          4,
          5
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          5,
          6
        ],
        [
          8,
          10
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          6,
          7
        ],
        [
          9,
          11
        ],
        [
          0,
          3
        ]
      ]
    ],
    "expected": 0
  },
  {
    "args": [
      [
        [
          7,
          8
        ],
        [
          10,
          12
        ],
        [
          1,
          4
        ],
        [
          4,
          8
        ]
      ]
    ],
    "expected": 1
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(eraseOverlapIntervals(...(args as any))).toEqual(expected);
});
