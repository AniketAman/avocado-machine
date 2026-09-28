import {expect, test} from 'vitest';
import {trap} from './solution';
test.each([
  [[0, 1, 0, 2, 1, 0, 1, 3], 5],
  [[4, 2, 0, 3, 2, 5], 9],
  [[1, 2, 3], 0],
  [[], 0],
])('counts water for %j', (heights, expected) => {
  expect(trap(heights as number[])).toBe(expected);
});
