import {expect, test} from 'vitest';
import {solve, type TreeNode} from './solution';

function inorder(node: TreeNode | null): number[] { return node ? [...inorder(node.left), node.val, ...inorder(node.right)] : []; }
function height(node: TreeNode | null): number { return node ? 1 + Math.max(height(node.left), height(node.right)) : 0; }
function balanced(node: TreeNode | null): boolean {
  return !node || (Math.abs(height(node.left) - height(node.right)) <= 1 && balanced(node.left) && balanced(node.right));
}

test('preserves sorted order and balance', () => {
  const nums = [-10, -3, 0, 5, 9];
  const root = solve(nums);
  expect(inorder(root)).toEqual(nums);
  expect(balanced(root)).toBe(true);
});

test('empty input has no root', () => { expect(solve([])).toBeNull(); });
