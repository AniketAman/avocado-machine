import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,2,3,4,5,6,7],3];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([5,6,7,1,2,3,4]);
});

test("case 2", () => {
  const args = [[-1,-100,3,99],2];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([3,99,-1,-100]);
});
