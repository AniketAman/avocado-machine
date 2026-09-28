import {expect, test} from 'vitest';
import {getSum} from './solution';

const cases = [
  {
    "args": [
      -650,
      -290
    ],
    "expected": -940,
    "name": "baseline: [-650,-290]"
  },
  {
    "name": "carry crosses multiple bits",
    "args": [
      7,
      1
    ],
    "expected": 8
  },
  {
    "name": "negative and positive sum",
    "args": [
      -4,
      7
    ],
    "expected": 3
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(getSum(...(args as any))).toEqual(expected);
});
