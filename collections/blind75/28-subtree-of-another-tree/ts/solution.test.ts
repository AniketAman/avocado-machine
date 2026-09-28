import {expect, test} from 'vitest';
import {isSubtree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        1,
        2,
        3
      ],
      [
        1,
        2,
        3
      ]
    ],
    "expected": true,
    "name": "baseline: [[1,2,3],[1,2,3]]"
  },
  {
    "name": "candidate prefix with extra descendants is not identical",
    "args": [
      [
        1,
        2,
        3,
        4
      ],
      [
        2
      ]
    ],
    "expected": false
  },
  {
    "name": "matching subtree below root",
    "args": [
      [
        3,
        4,
        5,
        1,
        2
      ],
      [
        4,
        1,
        2
      ]
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isSubtree(treeFrom(args[0]), treeFrom(args[1]))).toBe(expected);
});
