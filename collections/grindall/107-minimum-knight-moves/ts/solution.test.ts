import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [2,1];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(1);
});

test("case 2", () => {
  const args = [5,5];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});

test("case 3", () => {
  const args = [0,0];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(0);
});
