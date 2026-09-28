import {expect, test} from 'vitest';
import {search} from './solution';
test.each([
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 0, 3, 5, 9, 12], 2, -1],
  [[7], 7, 0],
  [[], 1, -1],
])('searches %j', (nums, target, expected) => {
  expect(search(nums as number[], target as number)).toBe(expected);
});
