import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,2,3],4];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(7);
});

test("case 2", () => {
  const args = [[9],3];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(0);
});
