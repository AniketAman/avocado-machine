import {expect, test} from 'vitest';
import {findAnagrams} from './solution';
test.each([
  ['cbaebabacd', 'abc', [0, 6]],
  ['abab', 'ab', [0, 1, 2]],
  ['aaaa', 'aa', [0, 1, 2]],
  ['a', 'ab', []],
])('finds anagrams in %j', (s, p, expected) => {
  expect(findAnagrams(s, p)).toEqual(expected);
});
