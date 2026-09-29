import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[3,2,1,5,6,4],2];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(5);
});

test("case 2", () => {
  const args = [[3,2,3,1,2,4,5,5,6],4];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});
