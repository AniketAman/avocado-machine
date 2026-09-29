import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[2,2,1]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(1);
});

test("case 2", () => {
  const args = [[4,1,2,1,2]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});
