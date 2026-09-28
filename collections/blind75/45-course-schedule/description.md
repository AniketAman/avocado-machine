# Course Schedule (Medium)

**Topic:** Graphs · **Difficulty:** Medium

Determine whether all courses can be taken when each pair [a, b] requires b before a.

## TypeScript interface

`canFinish(numCourses: number, prerequisites: number[][]): boolean`

## Example

`numCourses = 2, prerequisites = [[0, 1], [1, 0]] → false`

## Rules

A directed cycle makes completion impossible.

Source: [NeetCode problem](https://neetcode.io/problems/course-schedule/)
