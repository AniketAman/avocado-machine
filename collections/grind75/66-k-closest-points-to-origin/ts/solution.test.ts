import {expect, test} from 'vitest';
import {kClosest} from './solution';
const sorted = (points: number[][]) => points.map(p => p.join(',')).sort();
test('selects closest points regardless of result order', () => {
  expect(sorted(kClosest([[1,3],[-2,2]], 1))).toEqual(sorted([[-2,2]]));
  expect(sorted(kClosest([[3,3],[5,-1],[-2,4]], 2))).toEqual(sorted([[3,3],[-2,4]]));
  expect(kClosest([[0,0]], 1)).toEqual([[0,0]]);
});
