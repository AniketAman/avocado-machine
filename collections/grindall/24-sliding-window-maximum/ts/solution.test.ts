import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,3,-1,-3,5,3,6,7],3];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([3,3,5,5,6,7]);
});

test("case 2", () => {
  const args = [[1],1];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([1]);
});
