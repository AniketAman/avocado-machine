# Graph: Cheapest Flights Within K Stops (Medium)

**Topic:** Graph | **Difficulty:** Medium

Find the cheapest fare from src to dst using at most k intermediate stops, or -1 if impossible.

## TypeScript interface

`solve(n: number, flights: number[][], src: number, dst: number, k: number): number`

## Examples

- Input: `[4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1]`; output: `700`.
- Input: `[3,[[0,1,100],[1,2,100],[0,2,500]],0,2,1]`; output: `200`.

Source: [LeetCode problem](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
