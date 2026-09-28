import {expect, test} from 'vitest';
import {canAttendMeetings} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": true,
    "name": "baseline: [[]]"
  },
  {
    "name": "end equals next start permits both meetings",
    "args": [
      [
        [
          1,
          3
        ],
        [
          3,
          5
        ]
      ]
    ],
    "expected": true
  },
  {
    "name": "nested intervals conflict",
    "args": [
      [
        [
          1,
          10
        ],
        [
          2,
          3
        ]
      ]
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(canAttendMeetings(...(args as any))).toEqual(expected);
});
