import {expect, test} from 'vitest';
import {lowestCommonAncestor, type TreeNode} from './solution';
const node = (val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode => ({val, left, right});
test('finds shared ancestor by node identity', () => {
  const p = node(5, node(6), node(2));
  const q = node(1, node(0), node(8));
  const root = node(3, p, q);
  expect(lowestCommonAncestor(root, p, q)).toBe(root);
  expect(lowestCommonAncestor(root, p.left!, p.right!)).toBe(p);
  expect(lowestCommonAncestor(root, p, p.left!)).toBe(p);
});
