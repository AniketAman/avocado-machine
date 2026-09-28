import {expect, test} from 'vitest';
import {evalRPN} from './solution';
test.each([
  [['2', '1', '+', '3', '*'], 9],
  [['4', '13', '5', '/', '+'], 6],
  [['-7', '2', '/'], -3],
  [['5'], 5],
])('evaluates %j', (tokens, expected) => {
  expect(evalRPN(tokens as string[])).toBe(expected);
});
