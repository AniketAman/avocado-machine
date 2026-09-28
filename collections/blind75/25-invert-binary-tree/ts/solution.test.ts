import {expect, test} from 'vitest';
import {invertTree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      []
    ],
    "expected": [],
    "name": "baseline: [[]]"
  },
  {
    "name": "missing children switch sides",
    "args": [
      [
        1,
        2,
        3,
        null,
        4,
        5,
        null
      ]
    ],
    "expected": [
      1,
      3,
      2,
      null,
      5,
      4
    ]
  },
  {
    "name": "one-sided chain changes direction",
    "args": [
      [
        1,
        2,
        null,
        3
      ]
    ],
    "expected": [
      1,
      null,
      2,
      null,
      3
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(treeToArray(invertTree(treeFrom(args[0])))).toEqual(expected);
});
