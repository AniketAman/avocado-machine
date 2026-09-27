import {expect, test} from 'vitest';
import {getSum} from './solution';

const cases = [
  {
    "args": [
      -650,
      -290
    ],
    "expected": -940
  },
  {
    "args": [
      -577,
      -261
    ],
    "expected": -838
  },
  {
    "args": [
      -504,
      -232
    ],
    "expected": -736
  },
  {
    "args": [
      -431,
      -203
    ],
    "expected": -634
  },
  {
    "args": [
      -358,
      -174
    ],
    "expected": -532
  },
  {
    "args": [
      -285,
      -145
    ],
    "expected": -430
  },
  {
    "args": [
      -212,
      -116
    ],
    "expected": -328
  },
  {
    "args": [
      -139,
      -87
    ],
    "expected": -226
  },
  {
    "args": [
      -66,
      -58
    ],
    "expected": -124
  },
  {
    "args": [
      7,
      -29
    ],
    "expected": -22
  },
  {
    "args": [
      80,
      0
    ],
    "expected": 80
  },
  {
    "args": [
      153,
      29
    ],
    "expected": 182
  },
  {
    "args": [
      226,
      58
    ],
    "expected": 284
  },
  {
    "args": [
      299,
      87
    ],
    "expected": 386
  },
  {
    "args": [
      372,
      116
    ],
    "expected": 488
  },
  {
    "args": [
      445,
      145
    ],
    "expected": 590
  },
  {
    "args": [
      518,
      174
    ],
    "expected": 692
  },
  {
    "args": [
      591,
      203
    ],
    "expected": 794
  },
  {
    "args": [
      664,
      232
    ],
    "expected": 896
  },
  {
    "args": [
      737,
      261
    ],
    "expected": 998
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(getSum(...(args as any))).toEqual(expected);
});
