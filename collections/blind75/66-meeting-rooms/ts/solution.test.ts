import {expect, test} from 'vitest';
import {canAttendMeetings} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          1,
          2
        ],
        [
          5,
          7
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          2,
          3
        ],
        [
          6,
          8
        ],
        [
          10,
          13
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          3,
          4
        ],
        [
          7,
          9
        ],
        [
          11,
          14
        ],
        [
          15,
          19
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          4,
          5
        ],
        [
          8,
          10
        ],
        [
          12,
          15
        ],
        [
          16,
          20
        ],
        [
          0,
          1
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          5,
          6
        ],
        [
          9,
          11
        ],
        [
          13,
          16
        ],
        [
          17,
          21
        ],
        [
          1,
          2
        ],
        [
          5,
          7
        ]
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          6,
          7
        ],
        [
          10,
          12
        ],
        [
          14,
          17
        ],
        [
          18,
          22
        ],
        [
          2,
          3
        ],
        [
          6,
          8
        ],
        [
          10,
          13
        ]
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          7,
          8
        ],
        [
          11,
          13
        ],
        [
          15,
          18
        ],
        [
          19,
          23
        ],
        [
          3,
          4
        ],
        [
          7,
          9
        ],
        [
          11,
          14
        ],
        [
          15,
          19
        ]
      ]
    ],
    "expected": false
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
    "expected": true
  },
  {
    "args": [
      [
        [
          9,
          10
        ],
        [
          13,
          15
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          10,
          11
        ],
        [
          14,
          16
        ],
        [
          18,
          21
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          11,
          12
        ],
        [
          15,
          17
        ],
        [
          19,
          22
        ],
        [
          3,
          7
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          12,
          13
        ],
        [
          16,
          18
        ],
        [
          0,
          3
        ],
        [
          4,
          8
        ],
        [
          8,
          9
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          13,
          14
        ],
        [
          17,
          19
        ],
        [
          1,
          4
        ],
        [
          5,
          9
        ],
        [
          9,
          10
        ],
        [
          13,
          15
        ]
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          14,
          15
        ],
        [
          18,
          20
        ],
        [
          2,
          5
        ],
        [
          6,
          10
        ],
        [
          10,
          11
        ],
        [
          14,
          16
        ],
        [
          18,
          21
        ]
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          15,
          16
        ],
        [
          19,
          21
        ],
        [
          3,
          6
        ],
        [
          7,
          11
        ],
        [
          11,
          12
        ],
        [
          15,
          17
        ],
        [
          19,
          22
        ],
        [
          3,
          7
        ]
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          16,
          17
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          17,
          18
        ],
        [
          1,
          3
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          18,
          19
        ],
        [
          2,
          4
        ],
        [
          6,
          9
        ]
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          19,
          20
        ],
        [
          3,
          5
        ],
        [
          7,
          10
        ],
        [
          11,
          15
        ]
      ]
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(canAttendMeetings(...(args as any))).toEqual(expected);
});
