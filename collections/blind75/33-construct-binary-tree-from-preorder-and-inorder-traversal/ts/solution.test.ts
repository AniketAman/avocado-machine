import {expect, test} from 'vitest';
import {buildTree} from './solution';
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
        2,
        1,
        3
      ]
    ],
    "expected": [
      1,
      2,
      3
    ],
    "name": "baseline: [[1,2,3],[2,1,3]]"
  },
  {
    "name": "right-only tree keeps right child position",
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
    "expected": [
      1,
      null,
      2,
      null,
      3
    ]
  },
  {
    "name": "balanced tree reconstructed from both traversals",
    "args": [
      [
        3,
        9,
        20,
        15,
        7
      ],
      [
        9,
        3,
        15,
        20,
        7
      ]
    ],
    "expected": [
      3,
      9,
      20,
      null,
      null,
      15,
      7
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(treeToArray(buildTree(args[0], args[1]))).toEqual(expected);
});
