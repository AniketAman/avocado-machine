import {expect, test} from 'vitest';
import {ladderLength} from './solution';
test.each([
  ['hit', 'cog', ['hot','dot','dog','lot','log','cog'], 5],
  ['hit', 'cog', ['hot','dot','dog','lot','log'], 0],
  ['a', 'c', ['a','b','c'], 2],
])('finds shortest transformation from %s to %s', (begin, end, words, expected) => {
  expect(ladderLength(begin, end, words as string[])).toBe(expected);
});
