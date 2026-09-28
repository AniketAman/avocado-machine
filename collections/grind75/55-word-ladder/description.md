# Word Ladder (Hard)

**Topic:** Graph · **Difficulty:** Hard

Transform a starting word into a target word by changing one letter at a time, using only words in the supplied dictionary after the first word.

## TypeScript interface

`ladderLength(beginWord: string, endWord: string, wordList: string[]): number`

## Example

`hit → hot → dot → dog → cog` has length `5`.

## Rules

All words have equal length. Return `0` if no sequence exists. Count both endpoint words.

Source: [LeetCode problem](https://leetcode.com/problems/word-ladder/)
