# String to Integer (atoi) (Medium)

**Topic:** String · **Difficulty:** Medium

Parse the leading signed decimal integer from a string.

## TypeScript interface

`myAtoi(s: string): number`

## Example

`"   -42more" → -42`

## Rules

Skip leading spaces, read an optional sign, then consecutive digits. Return 0 if no digits follow. Clamp to signed 32-bit range.

Source: [LeetCode problem](https://leetcode.com/problems/string-to-integer-atoi/)
