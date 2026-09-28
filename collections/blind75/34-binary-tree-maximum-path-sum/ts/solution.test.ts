import {expect, test} from 'vitest';
import {maxPathSum} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        -3,
        -2,
        -1
      ]
    ],
    "expected": -1,
    "name": "baseline: [[-3,-2,-1]]"
  },
  {
    "name": "all negative tree chooses best single node",
    "args": [
      [
        -10,
        -20,
        -3
      ]
    ],
    "expected": -3
  },
  {
    "name": "best path can pass through root",
    "args": [
      [
        -10,
        9,
        20,
        null,
        null,
        15,
        7
      ]
    ],
    "expected": 42
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(maxPathSum(treeFrom(args[0]))).toEqual(expected);
});
