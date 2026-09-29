import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([20,24]);
});

test("case 2", () => {
  const args = [[[1,2,3],[1,2,3],[1,2,3]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([1,1]);
});
