# Lowest Common Ancestor of a Binary Tree (Medium)

**Topic:** Binary Tree · **Difficulty:** Medium

Return the deepest node that is an ancestor of both given nodes in a binary tree.

## TypeScript interface

`lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null`

## Example

If `p` and `q` are in different root branches, the root is their lowest common ancestor.

## Rules

Both target nodes occur in the tree. Compare nodes by identity, not by value.

Source: [LeetCode problem](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
