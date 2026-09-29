import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [123];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(321);
});

test("case 2", () => {
  const args = [-123];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(-321);
});

test("case 3", () => {
  const args = [1534236469];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(0);
});
