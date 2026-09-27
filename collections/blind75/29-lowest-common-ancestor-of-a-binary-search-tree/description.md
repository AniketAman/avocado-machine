# Lowest Common Ancestor of a Binary Search Tree

**Topic:** Trees · **Difficulty:** Medium

Find the lowest node in a BST that is an ancestor of both p and q.

## TypeScript interface

`lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null`

## Example

`root = [5, 3, 8, 1, 4, 7, 9], p = 3, q = 8 → 5`

## Rules

A node may be its own ancestor. Values are unique and both nodes exist.

Source: [NeetCode problem](https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree/)
