import {expect, test} from 'vitest';
import {rightSideView, type TreeNode} from './solution';
const node = (val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode => ({val, left, right});
test('views rightmost node at each level', () => {
  expect(rightSideView(null)).toEqual([]);
  expect(rightSideView(node(1, node(2, null, node(5)), node(3, null, node(4))))).toEqual([1, 3, 4]);
  expect(rightSideView(node(1, node(2, node(3))))).toEqual([1, 2, 3]);
});
