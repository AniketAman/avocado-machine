# Insert Interval (Medium)

**Topic:** Intervals · **Difficulty:** Medium

Insert one closed interval into an already sorted, disjoint list, merging every interval it touches.

## TypeScript interface

`insert(intervals: number[][], newInterval: number[]): number[][]`

## Example

`intervals = [[1, 3], [4, 6]], newInterval = [2, 5] → [[1, 6]]`

## Rules

Closed intervals sharing an endpoint overlap.

Source: [NeetCode problem](https://neetcode.io/problems/insert-new-interval/)
