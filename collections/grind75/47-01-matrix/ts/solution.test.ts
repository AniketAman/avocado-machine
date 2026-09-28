import {expect, test} from 'vitest';
import {updateMatrix} from './solution';
test('computes nearest zero distances', () => {
  expect(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])).toEqual([[0,0,0],[0,1,0],[1,2,1]]);
  expect(updateMatrix([[0,1,1]])).toEqual([[0,1,2]]);
});
