import {expect, test} from 'vitest';
import {lowestCommonAncestor} from './solution';
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
      1,
      8
    ],
    "expected": 5,
    "name": "baseline: [[5,3,8,1,4,7,9],1,8]"
  },
  {
    "name": "ancestor can equal one target",
    "args": [
      [
        6,
        2,
        8,
        0,
        4,
        7,
        9
      ],
      2,
      4
    ],
    "expected": 2
  },
  {
    "name": "targets on opposite sides return root",
    "args": [
      [
        6,
        2,
        8,
        0,
        4,
        7,
        9
      ],
      2,
      8
    ],
    "expected": 6
  }
];

test.each(cases)('$name', ({args, expected}) => {
    const root = treeFrom(args[0]);
    const find = (node: any, value: number): any => !node ? null : node.val === value ? node : find(node.left, value) ?? find(node.right, value);
    expect(lowestCommonAncestor(root, find(root, args[1]), find(root, args[2]))?.val).toBe(expected);
});
