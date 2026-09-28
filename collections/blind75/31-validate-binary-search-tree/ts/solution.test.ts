import {expect, test} from 'vitest';
import {isValidBST} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        5,
        1,
        7,
        null,
        null,
        3,
        8
      ]
    ],
    "expected": false,
    "name": "baseline: [[5,1,7,null,null,3,8]]"
  },
  {
    "name": "deep descendant violates ancestor bound",
    "args": [
      [
        5,
        1,
        7,
        null,
        null,
        3,
        8
      ]
    ],
    "expected": false
  },
  {
    "name": "equal value violates strict ordering",
    "args": [
      [
        2,
        1,
        2
      ]
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isValidBST(treeFrom(args[0]))).toEqual(expected);
});
