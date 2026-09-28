import {expect, test} from 'vitest';
import {isSameTree} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [],
      []
    ],
    "expected": true,
    "name": "baseline: [[],[]]"
  },
  {
    "name": "same values but different child positions",
    "args": [
      [
        1,
        2,
        null
      ],
      [
        1,
        null,
        2
      ]
    ],
    "expected": false
  },
  {
    "name": "empty and nonempty trees differ",
    "args": [
      [],
      [
        1
      ]
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isSameTree(treeFrom(args[0]), treeFrom(args[1]))).toBe(expected);
});
