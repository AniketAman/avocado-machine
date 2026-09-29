import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[73,74,75,71,69,72,76,73]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([1,1,4,2,1,1,0,0]);
});

test("case 2", () => {
  const args = [[30,40,50,60]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual([1,1,1,0]);
});
