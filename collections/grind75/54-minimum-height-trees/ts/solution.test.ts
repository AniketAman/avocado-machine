import {expect, test} from 'vitest';
import {findMinHeightTrees} from './solution';
test.each([
  [1, [], [0]],
  [4, [[1,0],[1,2],[1,3]], [1]],
  [6, [[3,0],[3,1],[3,2],[3,4],[5,4]], [3,4]],
])('finds minimum-height roots for %i nodes', (n, edges, expected) => {
  expect(findMinHeightTrees(n, edges as number[][]).sort((a,b) => a-b)).toEqual(expected);
});
