import {expect, test} from 'vitest';
import {countSubstrings} from './solution';

const cases = [
  {
    "args": [
      "a"
    ],
    "expected": 1
  },
  {
    "args": [
      "aa"
    ],
    "expected": 3
  },
  {
    "args": [
      "aab"
    ],
    "expected": 4
  },
  {
    "args": [
      "aabc"
    ],
    "expected": 5
  },
  {
    "args": [
      "aabca"
    ],
    "expected": 6
  },
  {
    "args": [
      "aabcaa"
    ],
    "expected": 8
  },
  {
    "args": [
      "aabcaaa"
    ],
    "expected": 11
  },
  {
    "args": [
      "aabcaaab"
    ],
    "expected": 12
  },
  {
    "args": [
      "aabcaaabc"
    ],
    "expected": 13
  },
  {
    "args": [
      "aabcaaabca"
    ],
    "expected": 14
  },
  {
    "args": [
      "aabcaaabcaa"
    ],
    "expected": 16
  },
  {
    "args": [
      "aabcaaabcaaa"
    ],
    "expected": 19
  },
  {
    "args": [
      "aabcaaabcaaab"
    ],
    "expected": 20
  },
  {
    "args": [
      "aabcaaabcaaabc"
    ],
    "expected": 21
  },
  {
    "args": [
      "aabcaaabcaaabca"
    ],
    "expected": 22
  },
  {
    "args": [
      "aabcaaabcaaabcaa"
    ],
    "expected": 24
  },
  {
    "args": [
      "aabcaaabcaaabcaaa"
    ],
    "expected": 27
  },
  {
    "args": [
      "aabcaaabcaaabcaaab"
    ],
    "expected": 28
  },
  {
    "args": [
      "aabcaaabcaaabcaaabc"
    ],
    "expected": 29
  },
  {
    "args": [
      "aabcaaabcaaabcaaabca"
    ],
    "expected": 30
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(countSubstrings(...(args as any))).toEqual(expected);
});
