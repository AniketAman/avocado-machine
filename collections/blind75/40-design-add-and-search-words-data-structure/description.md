# Design Add And Search Words Data Structure

**Topic:** Tries · **Difficulty:** Medium

Store words and search by exact letters or a dot wildcard that matches any one letter.

## TypeScript interface

`class WordDictionary { addWord(word: string): void; search(pattern: string): boolean }`

## Example

`addWord("day"); search(".ay") → true`

## Rules

A search pattern may contain up to two dots.

Source: [NeetCode problem](https://neetcode.io/problems/design-word-search-data-structure/)
