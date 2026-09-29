import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,3,4,2,2]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(2);
});

test("case 2", () => {
  const args = [[3,1,3,4,2]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(3);
});
