import {expect, test} from 'vitest';
import {reverseBits} from './solution';

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
    "expected": 2147483648
  },
  {
    "args": [
      3
    ],
    "expected": 3221225472
  },
  {
    "args": [
      7
    ],
    "expected": 3758096384
  },
  {
    "args": [
      15
    ],
    "expected": 4026531840
  },
  {
    "args": [
      31
    ],
    "expected": 4160749568
  },
  {
    "args": [
      63
    ],
    "expected": 4227858432
  },
  {
    "args": [
      127
    ],
    "expected": 4261412864
  },
  {
    "args": [
      255
    ],
    "expected": 4278190080
  },
  {
    "args": [
      511
    ],
    "expected": 4286578688
  },
  {
    "args": [
      1023
    ],
    "expected": 4290772992
  },
  {
    "args": [
      2047
    ],
    "expected": 4292870144
  },
  {
    "args": [
      4095
    ],
    "expected": 4293918720
  },
  {
    "args": [
      8191
    ],
    "expected": 4294443008
  },
  {
    "args": [
      16383
    ],
    "expected": 4294705152
  },
  {
    "args": [
      32767
    ],
    "expected": 4294836224
  },
  {
    "args": [
      65535
    ],
    "expected": 4294901760
  },
  {
    "args": [
      131071
    ],
    "expected": 4294934528
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
    "expected": 4294967295
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(reverseBits(...(args as any))).toEqual(expected);
});
