import type { GraphNode } from "../../support";

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;
  return dfs(node, new Map());
}

function dfs(node: GraphNode, map: Map<GraphNode, GraphNode>): GraphNode {
  const newNode: GraphNode = {
    val: node.val,
    neighbors: [],
  };
  map.set(node, newNode);

  newNode.neighbors = node.neighbors.map((n) => map.get(n) || dfs(n, map));

  return newNode;
}
