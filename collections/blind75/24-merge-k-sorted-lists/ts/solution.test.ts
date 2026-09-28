import {expect, test} from 'vitest';
import {mergeKLists} from './solution';
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
    "name": "empty lists among nonempty lists",
    "args": [
      [
        [],
        [
          1,
          4
        ],
        [],
        [
          2,
          3
        ]
      ]
    ],
    "expected": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "name": "equal heads from different lists",
    "args": [
      [
        [
          1,
          1
        ],
        [
          1
        ],
        [
          1,
          2
        ]
      ]
    ],
    "expected": [
      1,
      1,
      1,
      1,
      2
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(listToArray(mergeKLists(args[0].map(listFrom)))).toEqual(expected);
});
