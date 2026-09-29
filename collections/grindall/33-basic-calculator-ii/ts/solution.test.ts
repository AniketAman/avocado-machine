import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = ["3+2*2"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(7);
});

test("case 2", () => {
  const args = [" 3/2 "];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(1);
});

test("case 3", () => {
  const args = [" 3+5 / 2 "];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(5);
});
