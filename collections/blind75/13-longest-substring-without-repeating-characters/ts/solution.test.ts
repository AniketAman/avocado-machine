import {expect, test} from 'vitest';
import {lengthOfLongestSubstring} from './solution';

const cases = [
  {
    "args": [
      ""
    ],
    "expected": 0
  },
  {
    "args": [
      "bc1"
    ],
    "expected": 3
  },
  {
    "args": [
      "cde2"
    ],
    "expected": 4
  },
  {
    "args": [
      "deab3"
    ],
    "expected": 5
  },
  {
    "args": [
      "abcde4"
    ],
    "expected": 6
  },
  {
    "args": [
      "bcde5"
    ],
    "expected": 5
  },
  {
    "args": [
      "cdeabcd6"
    ],
    "expected": 6
  },
  {
    "args": [
      "deabcdea7"
    ],
    "expected": 6
  },
  {
    "args": [
      "abcdeabcd8"
    ],
    "expected": 6
  },
  {
    "args": [
      "bcdeabcdea9"
    ],
    "expected": 6
  },
  {
    "args": [
      "cde10"
    ],
    "expected": 5
  },
  {
    "args": [
      "deabcde11"
    ],
    "expected": 6
  },
  {
    "args": [
      "abcdeabcdeabc12"
    ],
    "expected": 7
  },
  {
    "args": [
      "bcdeabcdeabcde13"
    ],
    "expected": 7
  },
  {
    "args": [
      "cdeabcdeabcdeab14"
    ],
    "expected": 7
  },
  {
    "args": [
      "de15"
    ],
    "expected": 4
  },
  {
    "args": [
      "abcdeabcde16"
    ],
    "expected": 7
  },
  {
    "args": [
      "bcdeabcdeabcde17"
    ],
    "expected": 7
  },
  {
    "args": [
      "cdeabcdeabcdeabcde18"
    ],
    "expected": 7
  },
  {
    "args": [
      "deabcdeabcdeabcdeabc19"
    ],
    "expected": 7
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(lengthOfLongestSubstring(...(args as any))).toEqual(expected);
});
