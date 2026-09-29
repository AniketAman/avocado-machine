import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [[["X","X","X","X"],["X","*","O","X"],["X","O","#","X"],["X","X","X","X"]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(2);
});

test("case 2", () => {
  const args = [[["*","X","#"]]];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(-1);
});
