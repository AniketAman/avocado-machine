import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = ["3[a]2[bc]"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("aaabcbc");
});

test("case 2", () => {
  const args = ["3[a2[c]]"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("accaccacc");
});

test("case 3", () => {
  const args = ["2[abc]3[cd]ef"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("abcabccdcdcdef");
});
