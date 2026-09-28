# Time Based Key-Value Store (Medium)

**Topic:** Binary Search · **Difficulty:** Medium

Store values for keys at increasing timestamps and retrieve the most recent value at or before a requested time.

## TypeScript interface

`class TimeMap { set(key: string, value: string, timestamp: number): void; get(key: string, timestamp: number): string }`

## Example

`set("foo", "bar", 1); get("foo", 3) → "bar"`

## Rules

Timestamps supplied to `set` are increasing for each key. Return an empty string when no prior value exists.

Source: [LeetCode problem](https://leetcode.com/problems/time-based-key-value-store/)
