import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[0,1,0,3,12]];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([1,3,12,0,0]);
});

test("case 2", () => {
  const args = [[0,0,1]];
  solve(...args as Parameters<typeof solve>);
  expect(args[0]).toEqual([1,0,0]);
});
