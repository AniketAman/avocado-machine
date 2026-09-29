import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [121];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(true);
});

test("case 2", () => {
  const args = [-121];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(false);
});

test("case 3", () => {
  const args = [10];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(false);
});
