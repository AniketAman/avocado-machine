import {expect, test} from 'vitest';
import {numDecodings} from './solution';

const cases = [
  {
    "args": [
      "10"
    ],
    "expected": 1,
    "name": "baseline: [\"10\"]"
  },
  {
    "name": "zero must belong to ten or twenty",
    "args": [
      "101"
    ],
    "expected": 1
  },
  {
    "name": "invalid leading zero",
    "args": [
      "06"
    ],
    "expected": 0
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(numDecodings(...(args as any))).toEqual(expected);
});
