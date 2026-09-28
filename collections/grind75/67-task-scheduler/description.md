# Task Scheduler (Medium)

**Topic:** Heap · **Difficulty:** Medium

Find the fewest time slots needed to run all tasks when equal task letters need a cooldown between runs.

## TypeScript interface

`leastInterval(tasks: string[], n: number): number`

## Example

`["A","A","A","B","B","B"], n=2 → 8`

## Rules

Each task takes one slot. Idle slots are allowed. There must be at least `n` slots between equal tasks.

Source: [LeetCode problem](https://leetcode.com/problems/task-scheduler/)
