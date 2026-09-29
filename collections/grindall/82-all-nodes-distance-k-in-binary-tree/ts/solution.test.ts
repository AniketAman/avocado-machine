import {expect, test} from 'vitest';
import {solve, type TreeNode} from './solution';

function tree(values: Array<number | null>): TreeNode[] {
  const nodes = values.map(value => value === null ? null : {val: value, left: null, right: null} as TreeNode);
  nodes.forEach((node, i) => { if (node) { node.left = nodes[2 * i + 1] ?? null; node.right = nodes[2 * i + 2] ?? null; } });
  return nodes.filter((node): node is TreeNode => node !== null);
}

test('includes descendants and nodes through a parent', () => {
  const nodes = tree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  expect(solve(nodes[0], nodes.find(node => node.val === 5)!, 2).sort((a, b) => a - b)).toEqual([1, 4, 7]);
});

test('distance zero returns the target', () => {
  const nodes = tree([1]);
  expect(solve(nodes[0], nodes[0], 0)).toEqual([1]);
});
