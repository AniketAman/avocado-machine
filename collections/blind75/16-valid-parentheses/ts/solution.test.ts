import {expect, test} from 'vitest';
import {isValid} from './solution';

const cases = [
  {
    "args": [
      "()"
    ],
    "expected": true,
    "name": "baseline: [\"()\"]"
  },
  {
    "name": "crossed pairs are invalid",
    "args": [
      "([)]"
    ],
    "expected": false
  },
  {
    "name": "unclosed opener is invalid",
    "args": [
      "(()"
    ],
    "expected": false
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isValid(...(args as any))).toEqual(expected);
});
