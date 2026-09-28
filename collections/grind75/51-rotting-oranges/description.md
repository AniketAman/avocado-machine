# Rotting Oranges (Medium)

**Topic:** Graph · **Difficulty:** Medium

Each minute, a rotten orange makes its four-directionally adjacent fresh oranges rotten. Return the minutes needed to rot all oranges.

## TypeScript interface

`orangesRotting(grid: number[][]): number`

## Example

`[[2,1,1],[1,1,0],[0,1,1]] → 4`

## Rules

`0` is empty, `1` is fresh, and `2` is rotten. Return `-1` if some fresh orange can never rot.

Source: [LeetCode problem](https://leetcode.com/problems/rotting-oranges/)
