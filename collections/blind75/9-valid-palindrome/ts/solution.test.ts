import {expect, test} from 'vitest';
import {isPalindrome} from './solution';

const cases = [
  {
    "args": [
      "Ac!"
    ],
    "expected": false,
    "name": "baseline: [\"Ac!\"]"
  },
  {
    "name": "only punctuation becomes an empty palindrome",
    "args": [
      "., !"
    ],
    "expected": true
  },
  {
    "name": "case and punctuation are ignored",
    "args": [
      "A man, a plan, a canal: Panama"
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(isPalindrome(...(args as any))).toEqual(expected);
});
