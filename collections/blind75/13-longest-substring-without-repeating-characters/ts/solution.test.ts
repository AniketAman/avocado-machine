import {expect, test} from 'vitest';
import {lengthOfLongestSubstring} from './solution';

const cases = [
  {
    "args": [
      ""
    ],
    "expected": 0,
    "name": "baseline: [\"\"]"
  },
  {
    "name": "repeat at both sides of window",
    "args": [
      "abba"
    ],
    "expected": 2
  },
  {
    "name": "all unique characters",
    "args": [
      "abcd"
    ],
    "expected": 4
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(lengthOfLongestSubstring(...(args as any))).toEqual(expected);
});
