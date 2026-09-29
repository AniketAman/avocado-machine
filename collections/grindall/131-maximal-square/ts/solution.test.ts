import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});

test("case 2", () => {
  const args = [[["0","1"],["1","0"]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(1);
});
