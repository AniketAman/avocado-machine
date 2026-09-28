import {expect, test} from 'vitest';
import {majorityElement} from './solution';
test.each([
  [[3], 3],
  [[2, 2, 1, 2], 2],
  [[1, 2, 1, 2, 2], 2],
])('finds majority in %j', (nums, expected) => {
  expect(majorityElement(nums as number[])).toBe(expected);
});
