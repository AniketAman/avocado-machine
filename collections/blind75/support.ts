export class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

export class TreeNode {
  constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

export class GraphNode {
  constructor(public val: number, public neighbors: GraphNode[] = []) {}
}

export function listFrom(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

export function listToArray(head: ListNode | null, limit = 10000): number[] {
  const values: number[] = [];
  const seen = new Set<ListNode>();
  for (let node = head; node; node = node.next) {
    if (seen.has(node) || values.length >= limit) throw new Error('Returned list has a cycle or exceeds the limit');
    seen.add(node);
    values.push(node.val);
  }
  return values;
}

export function treeFrom(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue = [root];
  let index = 1;
  for (let head = 0; head < queue.length && index < values.length; head++) {
    const node = queue[head];
    const left = values[index++];
    if (left !== null && left !== undefined) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    if (index < values.length) {
      const right = values[index++];
      if (right !== null) {
        node.right = new TreeNode(right);
        queue.push(node.right);
      }
    }
  }
  return root;
}

export function treeToArray(root: TreeNode | null, limit = 10000): (number | null)[] {
  if (!root) return [];
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  for (let head = 0; head < queue.length; head++) {
    if (head >= limit) throw new Error('Returned tree exceeds the limit or has a cycle');
    const node = queue[head];
    result.push(node?.val ?? null);
    if (node) queue.push(node.left, node.right);
  }
  while (result.at(-1) === null) result.pop();
  return result;
}

export function graphFrom(adjacency: number[][]): GraphNode | null {
  if (!adjacency.length) return null;
  const nodes = adjacency.map((_, index) => new GraphNode(index + 1));
  adjacency.forEach((neighbors, index) => {
    nodes[index].neighbors = neighbors.map(value => nodes[value - 1]);
  });
  return nodes[0];
}

export function graphToAdjacency(root: GraphNode | null): number[][] {
  if (!root) return [];
  const found = new Map<number, GraphNode>();
  const queue = [root];
  for (let head = 0; head < queue.length; head++) {
    const node = queue[head];
    if (found.has(node.val)) continue;
    found.set(node.val, node);
    queue.push(...node.neighbors);
  }
  return [...found].sort(([a], [b]) => a - b).map(([, node]) => node.neighbors.map(neighbor => neighbor.val).sort((a, b) => a - b));
}
