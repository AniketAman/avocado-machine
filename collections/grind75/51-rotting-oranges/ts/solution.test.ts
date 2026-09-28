import {expect, test} from 'vitest';
import {orangesRotting} from './solution';
test.each([
  [[[2,1,1],[1,1,0],[0,1,1]], 4],
  [[[2,1,1],[0,1,1],[1,0,1]], -1],
  [[[0,2]], 0],
  [[[1]], -1],
])('counts minutes for %j', (grid, expected) => {
  expect(orangesRotting(grid as number[][])).toBe(expected);
});
