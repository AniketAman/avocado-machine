import {expect, test} from 'vitest';
import {sortColors} from './solution';
test.each([
  [[2, 0, 2, 1, 1, 0], [0, 0, 1, 1, 2, 2]],
  [[2, 0, 1], [0, 1, 2]],
  [[1], [1]],
  [[], []],
])('sorts %j in place', (nums, expected) => {
  const original = nums as number[];
  expect(sortColors(original)).toBeUndefined();
  expect(original).toEqual(expected);
});
