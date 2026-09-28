import {expect, test} from 'vitest';
import {jobScheduling} from './solution';
test.each([
  [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70], 120],
  [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60], 150],
  [[1, 1, 1], [2, 3, 4], [5, 6, 4], 6],
])('finds maximum profit', (start, end, profit, expected) => {
  expect(jobScheduling(start as number[], end as number[], profit as number[])).toBe(expected);
});
