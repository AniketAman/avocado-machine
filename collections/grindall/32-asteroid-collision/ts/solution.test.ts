import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[5,10,-5]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([5,10]);
});

test("case 2", () => {
  const args = [[8,-8]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([]);
});

test("case 3", () => {
  const args = [[10,2,-5]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([10]);
});
