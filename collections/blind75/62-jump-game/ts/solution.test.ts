import {expect, test} from 'vitest';
import {canJump} from './solution';

const cases = [
  {
    "args": [
      [
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        3,
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        2,
        3,
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2,
        3,
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        3,
        0,
        1,
        2,
        3,
        0,
        1,
        2,
        3,
        0
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        3,
        0,
        1,
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        2,
        3,
        0,
        1,
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        1,
        2,
        3,
        0,
        1,
        2,
        3,
        0,
        1,
        2
      ]
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(canJump(...(args as any))).toEqual(expected);
});
