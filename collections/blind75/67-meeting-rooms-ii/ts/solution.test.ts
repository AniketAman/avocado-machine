import {expect, test} from 'vitest';
import {minMeetingRooms} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": 0,
    "name": "baseline: [[]]"
  },
  {
    "name": "end equals start reuses same room",
    "args": [
      [
        [
          1,
          2
        ],
        [
          2,
          3
        ]
      ]
    ],
    "expected": 1
  },
  {
    "name": "peak concurrency requires three rooms",
    "args": [
      [
        [
          0,
          10
        ],
        [
          1,
          9
        ],
        [
          2,
          8
        ]
      ]
    ],
    "expected": 3
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(minMeetingRooms(...(args as any))).toEqual(expected);
});
