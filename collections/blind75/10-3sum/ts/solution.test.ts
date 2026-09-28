import {expect, test} from 'vitest';
import {threeSum} from './solution';
const normalize = (value: number[][] | string[][]) => value.map(group => [...group].sort()).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
const cases = [
  {
    "args": [
      [
        0,
        0,
        0
      ]
    ],
    "expected": [
      [
        0,
        0,
        0
      ]
    ],
    "name": "baseline: [[0,0,0]]"
  },
  {
    "name": "duplicate zero triplet appears once",
    "args": [
      [
        0,
        0,
        0,
        0
      ]
    ],
    "expected": [
      [
        0,
        0,
        0
      ]
    ]
  },
  {
    "name": "two distinct zero-sum combinations",
    "args": [
      [
        -1,
        0,
        1,
        2,
        -1,
        -4
      ]
    ],
    "expected": [
      [
        -1,
        -1,
        2
      ],
      [
        -1,
        0,
        1
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(threeSum(...(args as any)) as any)).toEqual(normalize(expected as any));
});
