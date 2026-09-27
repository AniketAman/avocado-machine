import {expect, test} from 'vitest';
import {hammingWeight} from './solution';

const cases = [
  {
    "args": [
      0
    ],
    "expected": 0
  },
  {
    "args": [
      1
    ],
    "expected": 1
  },
  {
    "args": [
      3
    ],
    "expected": 2
  },
  {
    "args": [
      7
    ],
    "expected": 3
  },
  {
    "args": [
      15
    ],
    "expected": 4
  },
  {
    "args": [
      31
    ],
    "expected": 5
  },
  {
    "args": [
      63
    ],
    "expected": 6
  },
  {
    "args": [
      127
    ],
    "expected": 7
  },
  {
    "args": [
      255
    ],
    "expected": 8
  },
  {
    "args": [
      511
    ],
    "expected": 9
  },
  {
    "args": [
      1023
    ],
    "expected": 10
  },
  {
    "args": [
      2047
    ],
    "expected": 11
  },
  {
    "args": [
      4095
    ],
    "expected": 12
  },
  {
    "args": [
      8191
    ],
    "expected": 13
  },
  {
    "args": [
      16383
    ],
    "expected": 14
  },
  {
    "args": [
      32767
    ],
    "expected": 15
  },
  {
    "args": [
      65535
    ],
    "expected": 16
  },
  {
    "args": [
      131071
    ],
    "expected": 17
  },
  {
    "args": [
      2147483648
    ],
    "expected": 1
  },
  {
    "args": [
      4294967295
    ],
    "expected": 32
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(hammingWeight(...(args as any))).toEqual(expected);
});
