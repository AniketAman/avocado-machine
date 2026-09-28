import {expect, test} from 'vitest';
import {calculate} from './solution';
test.each([
  ['1 + 1', 2],
  [' 2-1 + 2 ', 3],
  ['(1+(4+5+2)-3)+(6+8)', 23],
  ['-(3 + (2 - 1))', -4],
])('evaluates %j', (expression, expected) => {
  expect(calculate(expression)).toBe(expected);
});
