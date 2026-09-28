# Implement Trie Prefix Tree (Medium)

**Topic:** Tries · **Difficulty:** Medium

Build a prefix tree that stores words, checks full-word membership, and checks whether any stored word has a prefix.

## TypeScript interface

`class PrefixTree { insert(word: string): void; search(word: string): boolean; startsWith(prefix: string): boolean }`

## Example

`insert("dog"); search("do") → false; startsWith("do") → true`

## Rules

Words and prefixes use lowercase English letters.

Source: [NeetCode problem](https://neetcode.io/problems/implement-prefix-tree/)
