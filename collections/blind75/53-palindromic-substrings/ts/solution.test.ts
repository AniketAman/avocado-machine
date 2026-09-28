import {expect, test} from 'vitest';
import {countSubstrings} from './solution';

const cases = [
  {
    "args": [
      "a"
    ],
    "expected": 1,
    "name": "baseline: [\"a\"]"
  },
  {
    "name": "even and odd palindromes overlap",
    "args": [
      "aaa"
    ],
    "expected": 6
  },
  {
    "name": "no palindrome longer than one character",
    "args": [
      "abc"
    ],
    "expected": 3
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(countSubstrings(...(args as any))).toEqual(expected);
});
