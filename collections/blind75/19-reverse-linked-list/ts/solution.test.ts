import {expect, test} from 'vitest';
import {reverseList} from './solution';
import {listFrom, listToArray} from '../../support';

const cases = [
  {
    "args": [
      []
    ],
    "expected": [],
    "name": "baseline: [[]]"
  },
  {
    "name": "two nodes reverse their links",
    "args": [
      [
        1,
        2
      ]
    ],
    "expected": [
      2,
      1
    ]
  },
  {
    "name": "negative and repeated values preserve nodes",
    "args": [
      [
        -1,
        -1,
        2
      ]
    ],
    "expected": [
      2,
      -1,
      -1
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(listToArray(reverseList(listFrom(args[0])))).toEqual(expected);
});
