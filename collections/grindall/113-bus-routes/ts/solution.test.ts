import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[[1,2,7],[3,6,7]],1,6];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(2);
});

test("case 2", () => {
  const args = [[[1,2,7]],1,1];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(0);
});

test("case 3", () => {
  const args = [[[1,2],[3,4]],1,4];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(-1);
});
