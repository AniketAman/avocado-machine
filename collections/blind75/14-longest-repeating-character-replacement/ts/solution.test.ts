import {expect, test} from 'vitest';
import {characterReplacement} from './solution';

const cases = [
  {
    "args": [
      "AB",
      0
    ],
    "expected": 1,
    "name": "baseline: [\"AB\",0]"
  },
  {
    "name": "window must shrink after frequency changes",
    "args": [
      "AABABBA",
      1
    ],
    "expected": 4
  },
  {
    "name": "no replacements allowed",
    "args": [
      "ABBBAC",
      0
    ],
    "expected": 3
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(characterReplacement(...(args as any))).toEqual(expected);
});
