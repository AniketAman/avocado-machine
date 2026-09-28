import {expect, test} from 'vitest';
import {numIslands} from './solution';

const cases = [
  {
    "args": [
      [
        [
          "1"
        ]
      ]
    ],
    "expected": 1,
    "name": "baseline: [[[\"1\"]]]"
  },
  {
    "name": "diagonal contact does not join islands",
    "args": [
      [
        [
          "1",
          "0"
        ],
        [
          "0",
          "1"
        ]
      ]
    ],
    "expected": 2
  },
  {
    "name": "all water has no islands",
    "args": [
      [
        [
          "0",
          "0"
        ],
        [
          "0",
          "0"
        ]
      ]
    ],
    "expected": 0
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(numIslands(...(args as any))).toEqual(expected);
});
