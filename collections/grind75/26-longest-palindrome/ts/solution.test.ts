import {expect, test} from 'vitest';
import {longestPalindrome} from './solution';
test.each([
  ['abccccdd', 7],
  ['a', 1],
  ['Aa', 1],
  ['abc', 1],
  ['', 0],
])('finds maximum palindrome length for %j', (s, expected) => {
  expect(longestPalindrome(s)).toBe(expected);
});
