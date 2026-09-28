# Word Search II (Hard)

**Topic:** Tries · **Difficulty:** Hard

Return every distinct candidate word that can be traced through adjacent grid cells.

## TypeScript interface

`findWords(board: string[][], words: string[]): string[]`

## Example

`board = [["a", "b"], ["c", "d"]], words = ["ab", "ac", "abcd"] → ["ab", "ac"]`

## Rules

Move horizontally or vertically; do not reuse a cell within one word. Output order is free.

Source: [NeetCode problem](https://neetcode.io/problems/search-for-word-ii/)
