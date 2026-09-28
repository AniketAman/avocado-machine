import {expect, test} from 'vitest';
import {myAtoi} from './solution';
test.each([
  ['42', 42],
  ['   -42more', -42],
  ['words and 987', 0],
  ['-91283472332', -2147483648],
  ['91283472332', 2147483647],
  ['+-12', 0],
])('parses %j', (s, expected) => {
  expect(myAtoi(s)).toBe(expected);
});
