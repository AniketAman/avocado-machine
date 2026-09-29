import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,2,3,4,5],[3,4,5,1,2]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(3);
});

test("case 2", () => {
  const args = [[2,3,4],[3,4,3]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(-1);
});
