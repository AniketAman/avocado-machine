# 01 Matrix (Medium)

**Topic:** Graph · **Difficulty:** Medium

For each cell in a binary matrix, find its shortest four-directional distance to any zero cell.

## TypeScript interface

`updateMatrix(mat: number[][]): number[][]`

## Example

`[[0,0,0],[0,1,0],[1,1,1]] → [[0,0,0],[0,1,0],[1,2,1]]`

## Rules

At least one cell is zero. Distance is measured in cell-to-cell moves.

Source: [LeetCode problem](https://leetcode.com/problems/01-matrix/)
