import {expect, test} from 'vitest';
import {floodFill} from './solution';
test('fills only the connected component', () => {
  expect(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
  expect(floodFill([[0,0],[0,0]], 0, 0, 0)).toEqual([[0,0],[0,0]]);
});
