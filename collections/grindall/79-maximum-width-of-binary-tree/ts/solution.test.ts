import {expect, test} from 'vitest';
import {solve, type TreeNode} from './solution';

function toTree(values: Array<number | null>): TreeNode | null {
  const nodes = values.map(value => value === null ? null : {val: value, left: null, right: null} as TreeNode);
  nodes.forEach((node, i) => {
    if (node) {
      node.left = nodes[2 * i + 1] ?? null;
      node.right = nodes[2 * i + 2] ?? null;
    }
  });
  return nodes[0] ?? null;
}

test("case 1", () => {
  const raw = [[1,3,2,5,3,null,9]];
  const args = raw.map((value, index) => [0].includes(index) ? toTree(value as Array<number | null>) : value);
  expect(solve(...args as Parameters<typeof solve>)).toEqual(4);
});

test("case 2", () => {
  const raw = [[1,3,null,5,3]];
  const args = raw.map((value, index) => [0].includes(index) ? toTree(value as Array<number | null>) : value);
  expect(solve(...args as Parameters<typeof solve>)).toEqual(2);
});
