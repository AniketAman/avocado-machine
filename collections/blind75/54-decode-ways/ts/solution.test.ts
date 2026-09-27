import {expect, test} from 'vitest';
import {numDecodings} from './solution';

const cases = [
  {
    "args": [
      "10"
    ],
    "expected": 1
  },
  {
    "args": [
      "1212"
    ],
    "expected": 5
  },
  {
    "args": [
      "212121"
    ],
    "expected": 13
  },
  {
    "args": [
      "01010101"
    ],
    "expected": 0
  },
  {
    "args": [
      "1010101010"
    ],
    "expected": 1
  },
  {
    "args": [
      "12"
    ],
    "expected": 2
  },
  {
    "args": [
      "2121"
    ],
    "expected": 5
  },
  {
    "args": [
      "010101"
    ],
    "expected": 0
  },
  {
    "args": [
      "10101010"
    ],
    "expected": 1
  },
  {
    "args": [
      "1212121212"
    ],
    "expected": 89
  },
  {
    "args": [
      "21"
    ],
    "expected": 2
  },
  {
    "args": [
      "0101"
    ],
    "expected": 0
  },
  {
    "args": [
      "101010"
    ],
    "expected": 1
  },
  {
    "args": [
      "12121212"
    ],
    "expected": 34
  },
  {
    "args": [
      "2121212121"
    ],
    "expected": 89
  },
  {
    "args": [
      "01"
    ],
    "expected": 0
  },
  {
    "args": [
      "1010"
    ],
    "expected": 1
  },
  {
    "args": [
      "121212"
    ],
    "expected": 13
  },
  {
    "args": [
      "21212121"
    ],
    "expected": 34
  },
  {
    "args": [
      "0101010101"
    ],
    "expected": 0
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(numDecodings(...(args as any))).toEqual(expected);
});
