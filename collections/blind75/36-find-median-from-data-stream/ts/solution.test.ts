import {expect, test} from 'vitest';
import {MedianFinder} from './solution';

const cases = [
  {
    "args": [
      [
        -9
      ]
    ],
    "expected": [
      -9
    ],
    "name": "baseline: [[-9]]"
  },
  {
    "name": "median after every insertion across both heaps",
    "args": [
      [
        5,
        1,
        9,
        0
      ]
    ],
    "expected": [
      5,
      3,
      5,
      3
    ]
  },
  {
    "name": "duplicates and negatives",
    "args": [
      [
        -2,
        -2,
        3
      ]
    ],
    "expected": [
      -2,
      -2,
      -2
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    const finder = new MedianFinder();
    args[0].forEach((value: number, j: number) => { finder.addNum(value); expect(finder.findMedian()).toBe(expected[j]); });
});
