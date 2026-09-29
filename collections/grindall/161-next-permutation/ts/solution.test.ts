import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[1,2,3]];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([1,3,2]);
});

test("case 2", () => {
  const args = [[3,2,1]];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([1,2,3]);
});

test("case 3", () => {
  const args = [[1,1,5]];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([1,5,1]);
});
