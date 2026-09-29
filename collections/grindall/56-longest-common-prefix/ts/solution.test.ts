import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [["flower","flow","flight"]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("fl");
});

test("case 2", () => {
  const args = [["dog","racecar","car"]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual("");
});
