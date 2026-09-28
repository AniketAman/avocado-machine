import {expect, test} from 'vitest';
import {canConstruct} from './solution';
test.each([
  ['a', 'b', false],
  ['aa', 'ab', false],
  ['aa', 'aab', true],
  ['', 'abc', true],
])('checks %j against %j', (note, magazine, expected) => {
  expect(canConstruct(note, magazine)).toBe(expected);
});
