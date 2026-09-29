import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[[9,9,4],[6,6,8],[2,1,1]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});

test("case 2", () => {
  const args = [[[3,4,5],[3,2,6],[2,2,1]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});
