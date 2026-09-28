import {expect, test} from 'vitest';
import {hammingWeight} from './solution';

const cases = [
  {
    "args": [
      0
    ],
    "expected": 0,
    "name": "baseline: [0]"
  },
  {
    "name": "highest unsigned bit is counted",
    "args": [
      2147483648
    ],
    "expected": 1
  },
  {
    "name": "all 32 bits set",
    "args": [
      4294967295
    ],
    "expected": 32
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(hammingWeight(...(args as any))).toEqual(expected);
});
