import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[10,2]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("210");
});

test("case 2", () => {
  const args = [[3,30,34,5,9]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("9534330");
});

test("case 3", () => {
  const args = [[0,0]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("0");
});
