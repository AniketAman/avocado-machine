import {expect, test} from 'vitest';
import {isPalindrome} from './solution';

const cases = [
  {
    "args": [
      "Ac!"
    ],
    "expected": false
  },
  {
    "args": [
      "Aba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbbbba!"
    ],
    "expected": true
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbbbbbc!"
    ],
    "expected": false
  },
  {
    "args": [
      "Abbbbbbbbbbbbbbbbbbba!"
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(isPalindrome(...(args as any))).toEqual(expected);
});
