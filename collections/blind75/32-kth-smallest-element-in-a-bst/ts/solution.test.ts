import {expect, test} from 'vitest';
import {kthSmallest} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        5,
        3,
        8,
        1,
        4,
        7,
        9
      ],
      1
    ],
    "expected": 1,
    "name": "baseline: [[5,3,8,1,4,7,9],1]"
  },
  {
    "name": "k counts nodes in sorted order",
    "args": [
      [
        5,
        3,
        6,
        2,
        4,
        null,
        null,
        1
      ],
      3
    ],
    "expected": 3
  },
  {
    "name": "largest k returns maximum",
    "args": [
      [
        2,
        1,
        3
      ],
      3
    ],
    "expected": 3
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(kthSmallest(treeFrom(args[0]), args[1])).toBe(expected);
});
