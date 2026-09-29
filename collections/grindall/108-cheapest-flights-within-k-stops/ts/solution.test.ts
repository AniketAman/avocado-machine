import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(700);
});

test("case 2", () => {
  const args = [3,[[0,1,100],[1,2,100],[0,2,500]],0,2,1];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(200);
});
