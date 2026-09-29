import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = ["(()"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(2);
});

test("case 2", () => {
  const args = [")()())"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});

test("case 3", () => {
  const args = [""];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(0);
});
