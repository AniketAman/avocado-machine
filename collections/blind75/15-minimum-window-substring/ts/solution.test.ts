import {expect, test} from 'vitest';
import {minWindow} from './solution';

const cases = [
  {
    "args": [
      "x",
      "xy"
    ],
    "expected": "",
    "name": "baseline: [\"x\",\"xy\"]"
  },
  {
    "name": "target requires repeated letters",
    "args": [
      "AAABBC",
      "AABC"
    ],
    "expected": "AABBC"
  },
  {
    "name": "shortest window is inside source",
    "args": [
      "ADOBECODEBANC",
      "ABC"
    ],
    "expected": "BANC"
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(minWindow(...(args as any))).toEqual(expected);
});
