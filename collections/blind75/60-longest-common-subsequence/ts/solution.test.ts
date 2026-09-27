import {expect, test} from 'vitest';
import {longestCommonSubsequence} from './solution';

const cases = [
  {
    "args": [
      "a",
      "b"
    ],
    "expected": 0
  },
  {
    "args": [
      "ab",
      "b"
    ],
    "expected": 1
  },
  {
    "args": [
      "abc",
      "ba"
    ],
    "expected": 1
  },
  {
    "args": [
      "abca",
      "ba"
    ],
    "expected": 2
  },
  {
    "args": [
      "abcab",
      "bac"
    ],
    "expected": 2
  },
  {
    "args": [
      "abcaba",
      "bac"
    ],
    "expected": 2
  },
  {
    "args": [
      "abcabab",
      "bacb"
    ],
    "expected": 3
  },
  {
    "args": [
      "abcababc",
      "bacb"
    ],
    "expected": 3
  },
  {
    "args": [
      "abcababca",
      "bacba"
    ],
    "expected": 4
  },
  {
    "args": [
      "abcababcab",
      "bacba"
    ],
    "expected": 4
  },
  {
    "args": [
      "abcababcaba",
      "bacbab"
    ],
    "expected": 5
  },
  {
    "args": [
      "abcababcabab",
      "bacbab"
    ],
    "expected": 6
  },
  {
    "args": [
      "abcababcababc",
      "bacbaba"
    ],
    "expected": 6
  },
  {
    "args": [
      "abcababcababca",
      "bacbaba"
    ],
    "expected": 7
  },
  {
    "args": [
      "abcababcababcab",
      "bacbabac"
    ],
    "expected": 7
  },
  {
    "args": [
      "abcababcababcaba",
      "bacbabac"
    ],
    "expected": 7
  },
  {
    "args": [
      "abcababcababcabab",
      "bacbabacb"
    ],
    "expected": 8
  },
  {
    "args": [
      "abcababcababcababc",
      "bacbabacb"
    ],
    "expected": 8
  },
  {
    "args": [
      "abcababcababcababca",
      "bacbabacba"
    ],
    "expected": 9
  },
  {
    "args": [
      "abcababcababcababcab",
      "bacbabacba"
    ],
    "expected": 9
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(longestCommonSubsequence(...(args as any))).toEqual(expected);
});
