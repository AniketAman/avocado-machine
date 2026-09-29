import { expect, test } from "vitest";
import { cloneGraph } from "./solution";
import { graphFrom, graphToAdjacency } from "../../support";

const cases = [
  {
    args: [[]],
    expected: [],
    name: "baseline: [[]]",
  },
  {
    name: "cycle is cloned with adjacency preserved",
    args: [[[2], [1]]],
    expected: [[2], [1]],
  },
  {
    name: "single isolated node",
    args: [[[]]],
    expected: [[]],
  },
];

test.each(cases)("$name", ({ args, expected }) => {
  const original = graphFrom(args[0]);
  const copy = cloneGraph(original);

  expect(graphToAdjacency(copy)).toEqual(expected);

  if (original) expect(copy).not.toBe(original);

  const oldNodes = new Set<any>();
  const newNodes = new Set<any>();
  const visit = (node: any, seen: Set<any>) => {
    if (!node || seen.has(node)) return;
    seen.add(node);
    node.neighbors.forEach((next: any) => visit(next, seen));
  };
  visit(original, oldNodes);
  visit(copy, newNodes);
  expect([...newNodes].every((node) => !oldNodes.has(node))).toBe(true);
});
