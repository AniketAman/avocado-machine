import {expect, test} from 'vitest';
import {longestCommonSubsequence} from './solution';

const cases = [
  {
    "args": [
      "a",
      "b"
    ],
    "expected": 0,
    "name": "baseline: [\"a\",\"b\"]"
  },
  {
    "name": "order matters in a subsequence",
    "args": [
      "abc",
      "cba"
    ],
    "expected": 1
  },
  {
    "name": "repeated letters can be selected separately",
    "args": [
      "aaaa",
      "aa"
    ],
    "expected": 2
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(longestCommonSubsequence(...(args as any))).toEqual(expected);
});
