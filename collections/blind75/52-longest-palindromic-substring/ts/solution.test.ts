import {expect, test} from 'vitest';
import {longestPalindrome} from './solution';

const cases = [
  {
    "args": [
      "cabbac0"
    ],
    "expected": "cabbac"
  },
  {
    "args": [
      "abacabacx1"
    ],
    "expected": "abacaba"
  },
  {
    "args": [
      "cabbaccabbaccabbacxy2"
    ],
    "expected": "cabbaccabbaccabbac"
  },
  {
    "args": [
      "abacabacabacabac3"
    ],
    "expected": "abacabacabacaba"
  },
  {
    "args": [
      "cabbacx4"
    ],
    "expected": "cabbac"
  },
  {
    "args": [
      "abacabacxy5"
    ],
    "expected": "abacaba"
  },
  {
    "args": [
      "cabbaccabbaccabbac6"
    ],
    "expected": "cabbaccabbaccabbac"
  },
  {
    "args": [
      "abacabacabacabacx7"
    ],
    "expected": "abacabacabacaba"
  },
  {
    "args": [
      "cabbacxy8"
    ],
    "expected": "cabbac"
  },
  {
    "args": [
      "abacabac9"
    ],
    "expected": "abacaba"
  },
  {
    "args": [
      "cabbaccabbaccabbacx10"
    ],
    "expected": "cabbaccabbaccabbac"
  },
  {
    "args": [
      "abacabacabacabacxy11"
    ],
    "expected": "abacabacabacaba"
  },
  {
    "args": [
      "cabbac12"
    ],
    "expected": "cabbac"
  },
  {
    "args": [
      "abacabacx13"
    ],
    "expected": "abacaba"
  },
  {
    "args": [
      "cabbaccabbaccabbacxy14"
    ],
    "expected": "cabbaccabbaccabbac"
  },
  {
    "args": [
      "abacabacabacabac15"
    ],
    "expected": "abacabacabacaba"
  },
  {
    "args": [
      "cabbacx16"
    ],
    "expected": "cabbac"
  },
  {
    "args": [
      "abacabacxy17"
    ],
    "expected": "abacaba"
  },
  {
    "args": [
      "cabbaccabbaccabbac18"
    ],
    "expected": "cabbaccabbaccabbac"
  },
  {
    "args": [
      "abacabacabacabacx19"
    ],
    "expected": "abacabacabacaba"
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const answer = longestPalindrome(...(args as [any]));
    expect(args[0].includes(answer)).toBe(true);
    expect(answer).toBe([...answer].reverse().join(''));
    expect(answer.length).toBe(expected.length);
});
