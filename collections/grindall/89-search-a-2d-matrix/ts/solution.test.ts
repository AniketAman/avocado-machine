import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]],3];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(true);
});

test("case 2", () => {
  const args = [[[1,3,5,7],[10,11,16,20]],13];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(false);
});
