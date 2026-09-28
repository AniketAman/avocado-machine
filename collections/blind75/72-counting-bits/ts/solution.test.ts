import {expect, test} from 'vitest';
import {countBits} from './solution';

const cases = [
  {
    "args": [
      0
    ],
    "expected": [
      0
    ],
    "name": "baseline: [0]"
  },
  {
    "name": "counts bits at powers of two and neighbors",
    "args": [
      5
    ],
    "expected": [
      0,
      1,
      1,
      2,
      1,
      2
    ]
  },
  {
    "name": "zero only",
    "args": [
      0
    ],
    "expected": [
      0
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(countBits(...(args as any))).toEqual(expected);
});
