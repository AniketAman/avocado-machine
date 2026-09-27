import {expect, test} from 'vitest';
import {isAnagram} from './solution';

const cases = [
  {
    "args": [
      "ab",
      "b"
    ],
    "expected": false
  },
  {
    "args": [
      "aab",
      "baa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaab",
      "baaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaab",
      "baaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaab",
      "baaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaab",
      "baaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaab",
      "baaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaab",
      "baaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaab",
      "baaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaab",
      "baaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaab",
      "baaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaab",
      "baaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaab",
      "baaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaaaaa"
    ],
    "expected": false
  },
  {
    "args": [
      "aaaaaaaaaaaaaaaaaaaab",
      "baaaaaaaaaaaaaaaaaaaa"
    ],
    "expected": false
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(isAnagram(...(args as any))).toEqual(expected);
});
