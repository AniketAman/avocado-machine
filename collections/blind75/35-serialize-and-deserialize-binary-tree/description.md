# Serialize And Deserialize Binary Tree (Hard)

**Topic:** Trees · **Difficulty:** Hard

Convert a binary tree to a string and reconstruct the same tree from that string.

## TypeScript interface

`class Codec { serialize(root: TreeNode | null): string; deserialize(data: string): TreeNode | null }`

## Example

`[1, 2, 3, null, null, 4, 5] → serialize → deserialize → the same tree`

## Rules

Any unambiguous string format is valid. Preserve both values and child positions.

Source: [NeetCode problem](https://neetcode.io/problems/serialize-and-deserialize-binary-tree/)
