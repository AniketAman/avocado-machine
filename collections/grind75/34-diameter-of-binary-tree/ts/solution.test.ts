import {expect, test} from 'vitest';
import {diameterOfBinaryTree, type TreeNode} from './solution';
const node = (val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode => ({val, left, right});
test('counts edges, including a path below the root', () => {
  expect(diameterOfBinaryTree(null)).toBe(0);
  expect(diameterOfBinaryTree(node(1))).toBe(0);
  expect(diameterOfBinaryTree(node(1, node(2, node(4), node(5)), node(3)))).toBe(3);
  expect(diameterOfBinaryTree(node(0, node(1, node(2, node(3), node(4)), node(5, node(6)))))).toBe(4);
});
