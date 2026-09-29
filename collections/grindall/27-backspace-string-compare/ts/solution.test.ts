import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = ["ab#c","ad#c"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(true);
});

test("case 2", () => {
  const args = ["a#c","b"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(false);
});

test("case 3", () => {
  const args = ["xywrrmp","xywrrmu#p"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(true);
});
