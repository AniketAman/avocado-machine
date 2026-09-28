import {expect, test} from 'vitest';
import {isAnagram} from './solution';

const cases = [
  {
    "args": [
      "ab",
      "b"
    ],
    "expected": false,
    "name": "baseline: [\"ab\",\"b\"]"
  },
  {
    "name": "same counts in different order",
    "args": [
      "aabbc",
      "cbaba"
    ],
    "expected": true
  },
  {
    "name": "same length but different multiplicities",
    "args": [
      "aabc",
      "abbc"
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isAnagram(...(args as any))).toEqual(expected);
});
