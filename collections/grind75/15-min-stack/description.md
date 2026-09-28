# Min Stack (Medium)

**Topic:** Stack · **Difficulty:** Medium

Design a stack that can also report its smallest current value.

## TypeScript interface

`class MinStack { push(value: number): void; pop(): void; top(): number; getMin(): number }`

## Example

`push(-2), push(0), push(-3), getMin() → -3; pop(), top() → 0`

## Rules

Each operation should take constant time. `pop`, `top`, and `getMin` are called only when nonempty.

Source: [LeetCode problem](https://leetcode.com/problems/min-stack/)
