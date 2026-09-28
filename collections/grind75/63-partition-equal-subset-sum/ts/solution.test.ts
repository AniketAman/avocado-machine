import {expect, test} from 'vitest';
import {canPartition} from './solution';
test.each([
  [[1,5,11,5], true],
  [[1,2,3,5], false],
  [[1,1], true],
  [[2], false],
])('checks partition for %j', (nums, expected) => {
  expect(canPartition(nums as number[])).toBe(expected);
});
