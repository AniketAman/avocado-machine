# LRU Cache (Medium)

**Topic:** Linked List · **Difficulty:** Medium

Design a fixed-capacity cache that evicts the least recently used key when full.

## TypeScript interface

`class LRUCache { constructor(capacity: number); get(key: number): number; put(key: number, value: number): void }`

## Example

`capacity = 2; put(1, 1); put(2, 2); get(1) → 1; put(3, 3); get(2) → -1`

## Rules

`get` returns `-1` for a missing key. Reading or updating a key makes it most recently used.

Source: [LeetCode problem](https://leetcode.com/problems/lru-cache/)
