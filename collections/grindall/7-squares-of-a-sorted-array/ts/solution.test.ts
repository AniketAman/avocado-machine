import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[-4,-1,0,3,10]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([0,1,9,16,100]);
});

test("case 2", () => {
  const args = [[-7,-3,2,3,11]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([4,9,9,49,121]);
});
