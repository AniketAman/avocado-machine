import {expect, test} from 'vitest';
import {solve, type TreeNode} from './solution';

test('finds an ancestor successor', () => {
  const left: TreeNode = {val: 1, left: null, right: null};
  const right: TreeNode = {val: 3, left: null, right: null};
  const root: TreeNode = {val: 2, left, right};
  expect(solve(root, left)).toBe(root);
  expect(solve(root, right)).toBeNull();
});

test('finds the leftmost node of a right subtree', () => {
  const next: TreeNode = {val: 4, left: null, right: null};
  const p: TreeNode = {val: 3, left: null, right: {val: 5, left: next, right: null}};
  expect(solve(p, p)).toBe(next);
});
