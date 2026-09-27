import {expect, test} from 'vitest';
import {wordBreak} from './solution';

const cases = [
  {
    "args": [
      "ab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababababababababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababababababababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababababababababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababababababababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababababababababababababababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "abababababababababababababababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaaaab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababababababababababababababab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      "ababababababababababababababababababababc",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": false
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(wordBreak(...(args as any))).toEqual(expected);
});
