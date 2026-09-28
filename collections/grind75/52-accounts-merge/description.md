# Accounts Merge (Medium)

**Topic:** Graph · **Difficulty:** Medium

Merge account records that share an email address, including transitive links.

## TypeScript interface

`accountsMerge(accounts: string[][]): string[][]`

## Example

`[["A","a@x"],["A","a@x","b@x"]] → [["A","a@x","b@x"]]`

## Rules

Each record starts with a name followed by emails. Return each merged record with sorted emails. Record order is unrestricted.

Source: [LeetCode problem](https://leetcode.com/problems/accounts-merge/)
