# Alien Dictionary

**Topic:** Advanced Graphs · **Difficulty:** Hard

Infer an alphabet order consistent with a purportedly sorted list of words.

## TypeScript interface

`alienOrder(words: string[]): string`

## Example

`words = ["z", "o"] → "zo"`

## Rules

Return an empty string for a contradiction, including a longer word preceding its own prefix. Otherwise any valid order containing every seen letter is acceptable.

Source: [NeetCode problem](https://neetcode.io/problems/foreign-dictionary/)
