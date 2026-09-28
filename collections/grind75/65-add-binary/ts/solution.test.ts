import {expect, test} from 'vitest';
import {addBinary} from './solution';
test.each([
  ['11', '1', '100'],
  ['1010', '1011', '10101'],
  ['0', '0', '0'],
  ['1111', '1', '10000'],
])('adds %s and %s', (a, b, expected) => {
  expect(addBinary(a, b)).toBe(expected);
});
