import {expect, test} from 'vitest';
import {hasCycle} from './solution';
import {listFrom, listToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        0
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1
      ],
      1
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2
      ],
      2
    ],
    "expected": true
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4
      ],
      4
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
        4,
        5
      ],
      5
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
        4,
        5,
        6
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      7
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
        4,
        5,
        6,
        7,
        8
      ],
      8
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
        4,
        5,
        6,
        7,
        8,
        9
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      10
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
      ],
      11
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ],
      13
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      14
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      ],
      16
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17
      ],
      17
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
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18
      ],
      -1
    ],
    "expected": false
  },
  {
    "args": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ],
      19
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const head = listFrom(args[0]);
    if (args[1] >= 0) { let tail = head!; while (tail.next) tail = tail.next; let entry = head!; for (let j = 0; j < args[1]; j++) entry = entry.next!; tail.next = entry; }
    expect(hasCycle(head)).toBe(expected);
});
