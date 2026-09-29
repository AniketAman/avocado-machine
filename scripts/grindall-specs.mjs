const specs = {};

function add(slug, params, returns, summary, cases, extra = {}) {
  specs[slug] = {params, returns, summary, cases: cases.map(([args, expected]) => ({args, expected})), ...extra};
}

function linked(slug, params, returns, summary, cases, listArgs, listResult = true) {
  add(slug, params, returns, summary, cases, {
    prelude: 'export interface ListNode { val: number; next: ListNode | null }\n\n',
    testCode: `import {expect, test} from 'vitest';
import {solve, type ListNode} from './solution';

function toList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  for (let i = values.length - 1; i >= 0; i--) head = {val: values[i], next: head};
  return head;
}

function fromList(head: ListNode | null): number[] {
  const values: number[] = [];
  for (let node = head; node; node = node.next) {
    values.push(node.val);
    if (values.length > 100) throw new Error('Unexpected cycle');
  }
  return values;
}

${cases.map(([args, expected], i) => `test(${JSON.stringify(`case ${i + 1}`)}, () => {
  const raw = ${JSON.stringify(args)};
  const args = raw.map((value, index) => ${JSON.stringify(listArgs)}.includes(index) ? toList(value as number[]) : value);
  const result = solve(...args as Parameters<typeof solve>);
  expect(${listResult ? 'fromList(result)' : 'result'}).toEqual(${JSON.stringify(expected)});
});`).join('\n\n')}
`,
  });
}

function tree(slug, params, returns, summary, cases, treeArgs = [0], unorderedPaths = false) {
  add(slug, params, returns, summary, cases, {
    prelude: 'export interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null }\n\n',
    testCode: `import {expect, test} from 'vitest';
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

${cases.map(([args, expected], i) => `test(${JSON.stringify(`case ${i + 1}`)}, () => {
  const raw = ${JSON.stringify(args)};
  const args = raw.map((value, index) => ${JSON.stringify(treeArgs)}.includes(index) ? toTree(value as Array<number | null>) : value);
  ${unorderedPaths ? `const actual = solve(...args as Parameters<typeof solve>);
  expect(actual.map(path => JSON.stringify(path)).sort()).toEqual(${JSON.stringify(expected)}.map(path => JSON.stringify(path)).sort());` : `expect(solve(...args as Parameters<typeof solve>)).toEqual(${JSON.stringify(expected)});`}
});`).join('\n\n')}
`,
  });
}

add('move-zeroes', 'nums: number[]', 'void', 'Move all zeroes to the end of the array in place while preserving the relative order of nonzero values.', [
  [[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]],
  [[[0, 0, 1]], [1, 0, 0]],
], {mutates: 1});
add('squares-of-a-sorted-array', 'nums: number[]', 'number[]', 'Return the squares of a nondecreasing array in nondecreasing order.', [
  [[[-4, -1, 0, 3, 10]], [0, 1, 9, 16, 100]],
  [[[-7, -3, 2, 3, 11]], [4, 9, 9, 49, 121]],
]);
add('gas-station', 'gas: number[], cost: number[]', 'number', 'Find the unique starting station from which a full circular trip is possible, or return -1.', [
  [[[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]], 3],
  [[[2, 3, 4], [3, 4, 3]], -1],
]);
add('rotate-array', 'nums: number[], k: number', 'void', 'Rotate the array to the right by k positions in place.', [
  [[[1, 2, 3, 4, 5, 6, 7], 3], [5, 6, 7, 1, 2, 3, 4]],
  [[[-1, -100, 3, 99], 2], [3, 99, -1, -100]],
], {mutates: 1});
add('contiguous-array', 'nums: number[]', 'number', 'Return the length of the longest contiguous subarray containing equal numbers of zeroes and ones.', [
  [[[0, 1]], 2],
  [[[0, 1, 0]], 2],
  [[[0, 0, 1, 1, 0, 1]], 6],
]);
add('subarray-sum-equals-k', 'nums: number[], k: number', 'number', 'Count contiguous subarrays whose elements sum to k.', [
  [[[1, 1, 1], 2], 2],
  [[[1, 2, 3], 3], 2],
  [[[0, 0, 0], 0], 6],
]);
add('3sum-closest', 'nums: number[], target: number', 'number', 'Return the sum of three distinct elements closest to target; exactly one best answer exists.', [
  [[[-1, 2, 1, -4], 1], 2],
  [[[0, 0, 0], 1], 0],
]);
add('employee-free-time', 'schedule: number[][][]', 'number[][]', 'Given each employee\'s sorted, disjoint [start, end] work intervals, return finite intervals when everyone is free.', [
  [[[[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]], [[3, 4]]],
  [[[[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]]], [[5, 6], [7, 9]]],
]);
add('sliding-window-maximum', 'nums: number[], k: number', 'number[]', 'Return the maximum value in every contiguous window of size k.', [
  [[[1, 3, -1, -3, 5, 3, 6, 7], 3], [3, 3, 5, 5, 6, 7]],
  [[[1], 1], [1]],
]);

add('backspace-string-compare', 's: string, t: string', 'boolean', 'Compare the final strings produced when # deletes the preceding character.', [
  [['ab#c', 'ad#c'], true],
  [['a#c', 'b'], false],
  [['xywrrmp', 'xywrrmu#p'], true],
]);
add('daily-temperatures', 'temperatures: number[]', 'number[]', 'For each day, return how many days until a warmer temperature, or zero if none occurs.', [
  [[[73, 74, 75, 71, 69, 72, 76, 73]], [1, 1, 4, 2, 1, 1, 0, 0]],
  [[[30, 40, 50, 60]], [1, 1, 1, 0]],
]);
add('decode-string', 's: string', 'string', 'Decode nested repetition groups written as k[encoded_string].', [
  [['3[a]2[bc]'], 'aaabcbc'],
  [['3[a2[c]]'], 'accaccacc'],
  [['2[abc]3[cd]ef'], 'abcabccdcdcdef'],
]);
add('asteroid-collision', 'asteroids: number[]', 'number[]', 'Simulate collisions between right-moving positive and left-moving negative asteroids; equal sizes destroy both.', [
  [[[5, 10, -5]], [5, 10]],
  [[[8, -8]], []],
  [[[10, 2, -5]], [10]],
]);
add('basic-calculator-ii', 's: string', 'number', 'Evaluate +, -, *, and / in a nonnegative integer expression using normal precedence; division truncates toward zero.', [
  [['3+2*2'], 7],
  [[' 3/2 '], 1],
  [[' 3+5 / 2 '], 5],
]);
add('longest-valid-parentheses', 's: string', 'number', 'Return the length of the longest well-formed parentheses substring.', [
  [['(()'], 2],
  [[')()())'], 4],
  [[''], 0],
]);
specs['maximum-frequency-stack'] = {
  summary: 'Implement a stack that pops the most frequent value; break frequency ties by most recent push.',
  template: `export class FreqStack {
  push(value: number): void { throw new Error('Not implemented'); }
  pop(): number { throw new Error('Not implemented'); }
}
`,
  testCode: `import {expect, test} from 'vitest';
import {FreqStack} from './solution';

test('frequency and recency determine pop order', () => {
  const stack = new FreqStack();
  for (const value of [5, 7, 5, 7, 4, 5]) stack.push(value);
  expect([stack.pop(), stack.pop(), stack.pop(), stack.pop()]).toEqual([5, 7, 5, 4]);
});

test('a single value can be pushed and popped repeatedly', () => {
  const stack = new FreqStack();
  stack.push(1);
  stack.push(1);
  expect([stack.pop(), stack.pop()]).toEqual([1, 1]);
});
`,
};

linked('palindrome-linked-list', 'head: ListNode | null', 'boolean', 'Determine whether the values in a singly linked list read the same forward and backward.', [
  [[[1, 2, 2, 1]], true],
  [[[1, 2]], false],
  [[[]], true],
], [0], false);
linked('swap-nodes-in-pairs', 'head: ListNode | null', 'ListNode | null', 'Swap adjacent list nodes in pairs and return the new head.', [
  [[[1, 2, 3, 4]], [2, 1, 4, 3]],
  [[[1, 2, 3]], [2, 1, 3]],
  [[[]], []],
], [0]);
linked('odd-even-linked-list', 'head: ListNode | null', 'ListNode | null', 'Group nodes in odd positions before nodes in even positions while keeping each group in order.', [
  [[[1, 2, 3, 4, 5]], [1, 3, 5, 2, 4]],
  [[[2, 1, 3, 5, 6, 4, 7]], [2, 3, 6, 7, 1, 5, 4]],
], [0]);
linked('add-two-numbers', 'l1: ListNode | null, l2: ListNode | null', 'ListNode | null', 'Add two nonnegative integers represented by reverse-order linked-list digits and return reverse-order digits.', [
  [[[2, 4, 3], [5, 6, 4]], [7, 0, 8]],
  [[[9, 9, 9], [1]], [0, 0, 0, 1]],
], [0, 1]);
linked('sort-list', 'head: ListNode | null', 'ListNode | null', 'Sort a singly linked list in ascending order.', [
  [[[4, 2, 1, 3]], [1, 2, 3, 4]],
  [[[-1, 5, 3, 4, 0]], [-1, 0, 3, 4, 5]],
], [0]);
linked('rotate-list', 'head: ListNode | null, k: number', 'ListNode | null', 'Rotate a singly linked list right by k positions.', [
  [[[1, 2, 3, 4, 5], 2], [4, 5, 1, 2, 3]],
  [[[0, 1, 2], 4], [2, 0, 1]],
], [0]);
linked('reverse-nodes-in-k-group', 'head: ListNode | null, k: number', 'ListNode | null', 'Reverse each complete group of k list nodes; leave the final shorter group unchanged.', [
  [[[1, 2, 3, 4, 5], 2], [2, 1, 4, 3, 5]],
  [[[1, 2, 3, 4, 5], 3], [3, 2, 1, 4, 5]],
], [0]);

add('longest-common-prefix', 'words: string[]', 'string', 'Return the longest prefix shared by every string, or an empty string when none exists.', [
  [[['flower', 'flow', 'flight']], 'fl'],
  [[['dog', 'racecar', 'car']], ''],
]);
add('largest-number', 'nums: number[]', 'string', 'Arrange nonnegative integers so their concatenation forms the largest possible decimal number.', [
  [[[10, 2]], '210'],
  [[[3, 30, 34, 5, 9]], '9534330'],
  [[[0, 0]], '0'],
]);
specs['palindrome-pairs'] = {
  params: 'words: string[]', returns: 'number[][]',
  summary: 'Return all ordered pairs of distinct indices whose concatenated words form a palindrome.',
  cases: [{args: [['bat', 'tab', 'cat']], expected: [[0, 1], [1, 0]]}, {args: [['a', '']], expected: [[0, 1], [1, 0]]}],
  testCode: `import {expect, test} from 'vitest';
import {solve} from './solution';

test('finds both orientations', () => {
  expect(solve(['bat', 'tab', 'cat']).sort()).toEqual([[0, 1], [1, 0]]);
});

test('an empty word pairs with a palindrome', () => {
  expect(solve(['a', '']).sort()).toEqual([[0, 1], [1, 0]]);
});
`,
};

tree('symmetric-tree', 'root: TreeNode | null', 'boolean', 'Determine whether a binary tree is a mirror of itself around its center.', [
  [[[1, 2, 2, 3, 4, 4, 3]], true],
  [[[1, 2, 2, null, 3, null, 3]], false],
]);
tree('path-sum-ii', 'root: TreeNode | null, targetSum: number', 'number[][]', 'Return all root-to-leaf paths whose node values sum to targetSum.', [
  [[[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1], 22], [[5, 4, 11, 2], [5, 8, 4, 5]]],
  [[[1, 2, 3], 5], []],
], [0], true);
tree('maximum-width-of-binary-tree', 'root: TreeNode | null', 'number', 'Return the widest tree level, counting gaps between its leftmost and rightmost non-null nodes.', [
  [[[1, 3, 2, 5, 3, null, 9]], 4],
  [[[1, 3, null, 5, 3]], 2],
]);
tree('binary-tree-zigzag-level-order-traversal', 'root: TreeNode | null', 'number[][]', 'Return tree values level by level, alternating left-to-right and right-to-left order.', [
  [[[3, 9, 20, null, null, 15, 7]], [[3], [20, 9], [15, 7]]],
  [[[1]], [[1]]],
]);
tree('path-sum-iii', 'root: TreeNode | null, targetSum: number', 'number', 'Count downward paths with sum targetSum; a path may begin at any node.', [
  [[[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8], 3],
  [[[1, -2, -3], -1], 1],
]);
specs['all-nodes-distance-k-in-binary-tree'] = {
  summary: 'Return the values of nodes exactly k edges from the specified target node in a binary tree.',
  params: 'root: TreeNode | null, target: TreeNode, k: number', returns: 'number[]',
  prelude: 'export interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null }\n\n',
  testCode: `import {expect, test} from 'vitest';
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
`,
};

add('search-a-2d-matrix', 'matrix: number[][], target: number', 'boolean', 'Search a matrix whose rows increase and whose next row starts above the previous row\'s last value.', [
  [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], true],
  [[[[1, 3, 5, 7], [10, 11, 16, 20]], 13], false],
]);
add('median-of-two-sorted-arrays', 'nums1: number[], nums2: number[]', 'number', 'Return the median of two individually sorted arrays in O(log(m+n)) time.', [
  [[[1, 3], [2]], 2],
  [[[1, 2], [3, 4]], 2.5],
]);

add('shortest-path-to-get-food', 'grid: string[][]', 'number', 'From the cell marked *, find the fewest moves to any food cell # through open cells O; X cells are blocked.', [
  [[[['X', 'X', 'X', 'X'], ['X', '*', 'O', 'X'], ['X', 'O', '#', 'X'], ['X', 'X', 'X', 'X']]], 2],
  [[[['*', 'X', '#']]], -1],
]);
add('course-schedule-ii', 'numCourses: number, prerequisites: number[][]', 'number[]', 'Return any valid course order respecting [course, prerequisite] edges, or an empty array if a cycle exists.', [
  [[2, [[1, 0]]], [0, 1]],
  [[2, [[1, 0], [0, 1]]], []],
]);
add('minimum-knight-moves', 'x: number, y: number', 'number', 'Find the fewest chess-knight moves from (0, 0) to (x, y) on an infinite board.', [
  [[2, 1], 1],
  [[5, 5], 4],
  [[0, 0], 0],
]);
add('cheapest-flights-within-k-stops', 'n: number, flights: number[][], src: number, dst: number, k: number', 'number', 'Find the cheapest fare from src to dst using at most k intermediate stops, or -1 if impossible.', [
  [[4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1], 700],
  [[3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1], 200],
]);
add('longest-increasing-path-in-a-matrix', 'matrix: number[][]', 'number', 'Return the length of the longest strictly increasing path using orthogonal moves in a matrix.', [
  [[[[9, 9, 4], [6, 6, 8], [2, 1, 1]]], 4],
  [[[[3, 4, 5], [3, 2, 6], [2, 2, 1]]], 4],
]);
add('bus-routes', 'routes: number[][], source: number, target: number', 'number', 'Return the minimum buses needed to travel between stops, or -1 when no route connects them.', [
  [[[[1, 2, 7], [3, 6, 7]], 1, 6], 2],
  [[[[1, 2, 7]], 1, 1], 0],
  [[[[1, 2], [3, 4]], 1, 4], -1],
]);

specs['convert-sorted-array-to-binary-search-tree'] = {
  summary: 'Build a height-balanced binary search tree from a sorted array.',
  params: 'nums: number[]', returns: 'TreeNode | null',
  prelude: 'export interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null }\n\n',
  testCode: `import {expect, test} from 'vitest';
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
`,
};
specs['inorder-successor-in-bst'] = {
  summary: 'Return the node with the smallest value greater than p in a binary search tree, or null.',
  params: 'root: TreeNode | null, p: TreeNode', returns: 'TreeNode | null',
  prelude: 'export interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null }\n\n',
  testCode: `import {expect, test} from 'vitest';
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
`,
};

specs['insert-delete-getrandom-o1'] = {
  summary: 'Implement insert, remove, and uniformly random getRandom operations in expected O(1) time.',
  template: `export class RandomizedSet {
  insert(value: number): boolean { throw new Error('Not implemented'); }
  remove(value: number): boolean { throw new Error('Not implemented'); }
  getRandom(): number { throw new Error('Not implemented'); }
}
`,
  testCode: `import {expect, test} from 'vitest';
import {RandomizedSet} from './solution';

test('insert and remove report whether the set changed', () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.insert(1)).toBe(false);
  expect(set.remove(2)).toBe(false);
  expect(set.insert(2)).toBe(true);
  expect([1, 2]).toContain(set.getRandom());
  expect(set.remove(1)).toBe(true);
  expect(set.getRandom()).toBe(2);
});
`,
};
add('first-missing-positive', 'nums: number[]', 'number', 'Return the smallest positive integer absent from an unsorted array.', [
  [[[1, 2, 0]], 3],
  [[[3, 4, -1, 1]], 2],
  [[[7, 8, 9, 11, 12]], 1],
]);

add('maximal-square', 'matrix: string[][]', 'number', 'Return the area of the largest square containing only 1 cells in a binary matrix.', [
  [[[['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]], 4],
  [[[['0', '1'], ['1', '0']]], 1],
]);
add('combination-sum-iv', 'nums: number[], target: number', 'number', 'Count ordered sequences of values from nums that add up to target; values may be reused.', [
  [[[1, 2, 3], 4], 7],
  [[[9], 3], 0],
]);
add('single-number', 'nums: number[]', 'number', 'Every element occurs twice except one; return the element occurring once.', [
  [[[2, 2, 1]], 1],
  [[[4, 1, 2, 1, 2]], 4],
]);
add('find-the-duplicate-number', 'nums: number[]', 'number', 'An array of n+1 integers in [1,n] contains one repeated value; find it without modifying the array.', [
  [[[1, 3, 4, 2, 2]], 2],
  [[[3, 1, 3, 4, 2]], 3],
]);

add('roman-to-integer', 's: string', 'number', 'Convert a valid Roman numeral to its integer value, including subtractive pairs.', [
  [['III'], 3],
  [['MCMXCIV'], 1994],
]);
add('palindrome-number', 'x: number', 'boolean', 'Determine whether an integer reads the same from both ends in decimal notation.', [
  [[121], true],
  [[-121], false],
  [[10], false],
]);
specs['random-pick-with-weight'] = {
  summary: 'Construct a picker where index i is returned with probability proportional to its positive weight.',
  template: `export class WeightedPicker {
  constructor(weights: number[]) { throw new Error('Not implemented'); }
  pickIndex(): number { throw new Error('Not implemented'); }
}
`,
  testCode: `import {expect, test, vi} from 'vitest';
import {WeightedPicker} from './solution';

test('a single positive weight always selects index zero', () => {
  const picker = new WeightedPicker([5]);
  expect(picker.pickIndex()).toBe(0);
});

test('boundary draws select the correct weighted bucket', () => {
  const random = vi.spyOn(Math, 'random');
  try {
    const picker = new WeightedPicker([1, 3]);
    random.mockReturnValueOnce(0).mockReturnValueOnce(0.25).mockReturnValueOnce(0.999);
    expect([picker.pickIndex(), picker.pickIndex(), picker.pickIndex()]).toEqual([0, 1, 1]);
  } finally { random.mockRestore(); }
});
`,
};
add('powx-n', 'x: number, n: number', 'number', 'Compute x raised to integer power n, including negative exponents.', [
  [[2, 10], 1024],
  [[2, -2], 0.25],
  [[2.1, 3], 9.261000000000001],
], {testCode: `import {expect, test} from 'vitest';
import {solve} from './solution';

test('positive, negative, and fractional bases', () => {
  expect(solve(2, 10)).toBe(1024);
  expect(solve(2, -2)).toBe(0.25);
  expect(solve(2.1, 3)).toBeCloseTo(9.261);
});
`});
add('reverse-integer', 'x: number', 'number', 'Reverse the decimal digits of a signed 32-bit integer; return zero on overflow.', [
  [[123], 321],
  [[-123], -321],
  [[1534236469], 0],
]);

add('top-k-frequent-words', 'words: string[], k: number', 'string[]', 'Return the k most frequent words, breaking frequency ties by lexicographic order.', [
  [[['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2], ['i', 'love']],
  [[['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4], ['the', 'is', 'sunny', 'day']],
]);
add('find-k-closest-elements', 'arr: number[], k: number, x: number', 'number[]', 'Return k sorted elements closest to x, preferring smaller values when distances tie.', [
  [[[1, 2, 3, 4, 5], 4, 3], [1, 2, 3, 4]],
  [[[1, 2, 3, 4, 5], 4, -1], [1, 2, 3, 4]],
]);
add('kth-largest-element-in-an-array', 'nums: number[], k: number', 'number', 'Return the kth largest array element, counting duplicates by position.', [
  [[[3, 2, 1, 5, 6, 4], 2], 5],
  [[[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], 4],
]);
add('smallest-range-covering-elements-from-k-lists', 'nums: number[][]', 'number[]', 'Find the shortest inclusive range containing at least one value from each sorted list; break ties by lower start.', [
  [[[[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]], [20, 24]],
  [[[[1, 2, 3], [1, 2, 3], [1, 2, 3]]], [1, 1]],
]);

specs['design-in-memory-file-system'] = {
  summary: 'Implement an in-memory hierarchical file system with ls, mkdir, addContentToFile, and readContentFromFile.',
  template: `export class FileSystem {
  ls(path: string): string[] { throw new Error('Not implemented'); }
  mkdir(path: string): void { throw new Error('Not implemented'); }
  addContentToFile(filePath: string, content: string): void { throw new Error('Not implemented'); }
  readContentFromFile(filePath: string): string { throw new Error('Not implemented'); }
}
`,
  testCode: `import {expect, test} from 'vitest';
import {FileSystem} from './solution';

test('directories list in sorted order and files append content', () => {
  const fs = new FileSystem();
  expect(fs.ls('/')).toEqual([]);
  fs.mkdir('/a/b/c');
  fs.addContentToFile('/a/b/c/file', 'hello');
  fs.addContentToFile('/a/b/c/file', ' world');
  expect(fs.readContentFromFile('/a/b/c/file')).toBe('hello world');
  expect(fs.ls('/a/b/c')).toEqual(['file']);
  expect(fs.ls('/a/b/c/file')).toEqual(['file']);
});

test('sibling directory names sort alphabetically', () => {
  const fs = new FileSystem();
  fs.mkdir('/z');
  fs.mkdir('/a');
  expect(fs.ls('/')).toEqual(['a', 'z']);
});
`,
};

add('next-permutation', 'nums: number[]', 'void', 'Rearrange the array in place into its next lexicographic permutation, wrapping to the smallest permutation.', [
  [[[1, 2, 3]], [1, 3, 2]],
  [[[3, 2, 1]], [1, 2, 3]],
  [[[1, 1, 5]], [1, 5, 1]],
], {mutates: 1});
specs['generate-parentheses'] = {
  params: 'n: number', returns: 'string[]',
  summary: 'Generate every well-formed string made from n pairs of parentheses.',
  cases: [{args: [1], expected: ['()']}, {args: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()']}],
  testCode: `import {expect, test} from 'vitest';
import {solve} from './solution';

test('one pair', () => { expect(solve(1)).toEqual(['()']); });
test('three pairs in any order', () => {
  expect(solve(3).sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort());
});
`,
};
specs['n-queens'] = {
  params: 'n: number', returns: 'string[][]',
  summary: 'Return all placements of n queens on an n-by-n board with no two queens sharing a row, column, or diagonal.',
  cases: [{args: [1], expected: [['Q']]}],
  testCode: `import {expect, test} from 'vitest';
import {solve} from './solution';

test('one queen', () => { expect(solve(1)).toEqual([['Q']]); });
test('four queens have two valid arrangements', () => {
  const boards = solve(4);
  expect(boards).toHaveLength(2);
  for (const board of boards) {
    expect(board).toHaveLength(4);
    const columns = board.map(row => row.indexOf('Q'));
    expect(columns.every(column => column >= 0)).toBe(true);
    expect(new Set(columns).size).toBe(4);
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) expect(Math.abs(columns[i] - columns[j])).not.toBe(j - i);
  }
});
`,
};

add('valid-sudoku', 'board: string[][]', 'boolean', 'Check that filled digits in each Sudoku row, column, and 3-by-3 box are unique; . marks an empty cell.', [
  [[[['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]], true],
  [[[['8', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]], false],
]);
add('sudoku-solver', 'board: string[][]', 'void', 'Fill the given 9-by-9 Sudoku board in place with a valid solution; . marks an empty cell.', [
  [[[['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]], [['5', '3', '4', '6', '7', '8', '9', '1', '2'], ['6', '7', '2', '1', '9', '5', '3', '4', '8'], ['1', '9', '8', '3', '4', '2', '5', '6', '7'], ['8', '5', '9', '7', '6', '1', '4', '2', '3'], ['4', '2', '6', '8', '5', '3', '7', '9', '1'], ['7', '1', '3', '9', '2', '4', '8', '5', '6'], ['9', '6', '1', '5', '3', '7', '2', '8', '4'], ['2', '8', '7', '4', '1', '9', '6', '3', '5'], ['3', '4', '5', '2', '8', '6', '1', '7', '9']]],
], {mutates: 1});
specs['design-hit-counter'] = {
  summary: 'Count hits in the preceding 300 seconds, inclusive of the current timestamp, from timestamps given in nondecreasing order.',
  template: `export class HitCounter {
  hit(timestamp: number): void { throw new Error('Not implemented'); }
  getHits(timestamp: number): number { throw new Error('Not implemented'); }
}
`,
  testCode: `import {expect, test} from 'vitest';
import {HitCounter} from './solution';

test('counts hits and evicts old timestamps', () => {
  const counter = new HitCounter();
  counter.hit(1);
  counter.hit(2);
  counter.hit(3);
  expect(counter.getHits(4)).toBe(3);
  counter.hit(300);
  expect(counter.getHits(300)).toBe(4);
  expect(counter.getHits(301)).toBe(3);
});

test('counts multiple hits at one timestamp', () => {
  const counter = new HitCounter();
  counter.hit(1);
  counter.hit(1);
  expect(counter.getHits(1)).toBe(2);
});
`,
};

export default specs;
