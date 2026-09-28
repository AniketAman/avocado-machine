import {expect, test} from 'vitest';
import {subsets} from './solution';
const normalized = (items: number[][]) => items.map(item => [...item].sort((a,b) => a-b).join(',')).sort();
test('returns the power set', () => {
  expect(normalized(subsets([1,2,3]))).toEqual(normalized([[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]));
  expect(subsets([])).toEqual([[]]);
});
