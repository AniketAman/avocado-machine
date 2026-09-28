import {expect, test} from 'vitest';
import {removeNthFromEnd} from './solution';
import {listFrom, listToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        0
      ],
      1
    ],
    "expected": [],
    "name": "baseline: [[0],1]"
  },
  {
    "name": "remove head by length from end",
    "args": [
      [
        1,
        2,
        3
      ],
      3
    ],
    "expected": [
      2,
      3
    ]
  },
  {
    "name": "remove a middle node",
    "args": [
      [
        1,
        2,
        3,
        4
      ],
      2
    ],
    "expected": [
      1,
      2,
      4
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(listToArray(removeNthFromEnd(listFrom(args[0]), args[1]))).toEqual(expected);
});
