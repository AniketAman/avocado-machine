import {expect, test} from 'vitest';
import {isBalanced, type TreeNode} from './solution';
const node = (val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode => ({val, left, right});
test('balanced and unbalanced trees', () => {
  expect(isBalanced(null)).toBe(true);
  expect(isBalanced(node(3, node(9), node(20, node(15), node(7))))).toBe(true);
  expect(isBalanced(node(1, node(2, node(3, node(4)))))).toBe(false);
});
