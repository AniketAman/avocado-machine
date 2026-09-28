import {expect, test} from 'vitest';
import {largestRectangleArea} from './solution';
test.each([
  [[2, 1, 5, 6, 2, 3], 10],
  [[2, 4], 4],
  [[3, 3, 3], 9],
  [[], 0],
])('finds largest rectangle in %j', (heights, expected) => {
  expect(largestRectangleArea(heights as number[])).toBe(expected);
});
