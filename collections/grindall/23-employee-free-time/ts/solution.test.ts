import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[[[1,2],[5,6]],[[1,3]],[[4,10]]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([[3,4]]);
});

test("case 2", () => {
  const args = [[[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([[5,6],[7,9]]);
});
