# First Bad Version (Easy)

**Topic:** Binary Search · **Difficulty:** Easy

Versions 1 through `n` are ordered so that every version after the first bad one is also bad. Find the first bad version.

## TypeScript interface

`firstBadVersion(n: number, isBadVersion: (version: number) => boolean): number`

## Example

`n = 5`, bad versions start at `4` → `4`

## Rules

A bad version exists. Minimize calls to the supplied predicate.

Source: [LeetCode problem](https://leetcode.com/problems/first-bad-version/)
