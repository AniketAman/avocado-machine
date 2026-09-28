import {expect, test} from 'vitest';
import {permute} from './solution';
const normalized = (items: number[][]) => items.map(item => item.join(',')).sort();
test('returns all distinct permutations', () => {
  expect(normalized(permute([1,2,3]))).toEqual(normalized([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]));
  expect(permute([7])).toEqual([[7]]);
});
