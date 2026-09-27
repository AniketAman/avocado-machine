import {expect, test} from 'vitest';
import {characterReplacement} from './solution';

const cases = [
  {
    "args": [
      "AB",
      0
    ],
    "expected": 1
  },
  {
    "args": [
      "ABA",
      1
    ],
    "expected": 3
  },
  {
    "args": [
      "ABAC",
      2
    ],
    "expected": 4
  },
  {
    "args": [
      "ABACB",
      3
    ],
    "expected": 5
  },
  {
    "args": [
      "ABACBC",
      4
    ],
    "expected": 6
  },
  {
    "args": [
      "ABACBCA",
      0
    ],
    "expected": 1
  },
  {
    "args": [
      "ABACBCAB",
      1
    ],
    "expected": 3
  },
  {
    "args": [
      "ABACBCABA",
      2
    ],
    "expected": 4
  },
  {
    "args": [
      "ABACBC",
      3
    ],
    "expected": 5
  },
  {
    "args": [
      "ABACBCABACB",
      4
    ],
    "expected": 7
  },
  {
    "args": [
      "ABACBCABACBC",
      0
    ],
    "expected": 1
  },
  {
    "args": [
      "ABACBCABACBCA",
      1
    ],
    "expected": 3
  },
  {
    "args": [
      "ABACBC",
      2
    ],
    "expected": 4
  },
  {
    "args": [
      "ABACBCABACBC",
      3
    ],
    "expected": 5
  },
  {
    "args": [
      "ABACBCABACBCABAC",
      4
    ],
    "expected": 7
  },
  {
    "args": [
      "ABACBCABACBCABACB",
      0
    ],
    "expected": 1
  },
  {
    "args": [
      "ABACBC",
      1
    ],
    "expected": 3
  },
  {
    "args": [
      "ABACBCABACBC",
      2
    ],
    "expected": 4
  },
  {
    "args": [
      "ABACBCABACBCABACBC",
      3
    ],
    "expected": 5
  },
  {
    "args": [
      "ABACBCABACBCABACBCABA",
      4
    ],
    "expected": 7
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(characterReplacement(...(args as any))).toEqual(expected);
});
