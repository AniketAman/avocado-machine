# Flood Fill (Easy)

**Topic:** Graph · **Difficulty:** Easy

Starting from one pixel, recolor every four-directionally connected pixel that has the starting color.

## TypeScript interface

`floodFill(image: number[][], sr: number, sc: number, color: number): number[][]`

## Example

`[[1,1,1],[1,1,0],[1,0,1]], start=(1,1), color=2 → [[2,2,2],[2,2,0],[2,0,1]]`

## Rules

Return the recolored image. If the new color matches the starting color, leave it as is.

Source: [LeetCode problem](https://leetcode.com/problems/flood-fill/)
