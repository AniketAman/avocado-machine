# Graph: Course Schedule II (Medium)

**Topic:** Graph | **Difficulty:** Medium

Return any valid course order respecting [course, prerequisite] edges, or an empty array if a cycle exists.

## TypeScript interface

`solve(numCourses: number, prerequisites: number[][]): number[]`

## Examples

- Input: `[2,[[1,0]]]`; output: `[0,1]`.
- Input: `[2,[[1,0],[0,1]]]`; output: `[]`.

Source: [LeetCode problem](https://leetcode.com/problems/course-schedule-ii/)
