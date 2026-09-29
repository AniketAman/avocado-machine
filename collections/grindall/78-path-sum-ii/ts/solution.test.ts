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
  const raw = [[5,4,8,11,null,13,4,7,2,null,null,null,null,5,1],22];
  const args = raw.map((value, index) => [0].includes(index) ? toTree(value as Array<number | null>) : value);
  const actual = solve(...args as Parameters<typeof solve>);
  expect(actual.map(path => JSON.stringify(path)).sort()).toEqual([[5,4,11,2],[5,8,4,5]].map(path => JSON.stringify(path)).sort());
});

test("case 2", () => {
  const raw = [[1,2,3],5];
  const args = raw.map((value, index) => [0].includes(index) ? toTree(value as Array<number | null>) : value);
  const actual = solve(...args as Parameters<typeof solve>);
  expect(actual.map(path => JSON.stringify(path)).sort()).toEqual([].map(path => JSON.stringify(path)).sort());
});
