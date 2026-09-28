# Pacific Atlantic Water Flow (Medium)

**Topic:** Graphs · **Difficulty:** Medium

Return cells from which water can reach both the top/left ocean and the bottom/right ocean.

## TypeScript interface

`pacificAtlantic(heights: number[][]): number[][]`

## Example

`heights = [[1], [1]] → [[0, 0], [1, 0]]`

## Rules

Water may move to a horizontal or vertical neighbor of equal or lower height. Output order is free.

Source: [NeetCode problem](https://neetcode.io/problems/pacific-atlantic-water-flow/)
