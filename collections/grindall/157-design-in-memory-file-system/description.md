# Trie: Design In-Memory File System (Hard)

**Topic:** Trie | **Difficulty:** Hard

Implement an in-memory hierarchical file system with ls, mkdir, addContentToFile, and readContentFromFile.

## TypeScript interface

```ts
export class FileSystem {
  ls(path: string): string[] { throw new Error('Not implemented'); }
  mkdir(path: string): void { throw new Error('Not implemented'); }
  addContentToFile(filePath: string, content: string): void { throw new Error('Not implemented'); }
  readContentFromFile(filePath: string): string { throw new Error('Not implemented'); }
}
```

## Examples

See the focused cases in `ts/solution.test.ts`.

Source: [LeetCode problem](https://leetcode.com/problems/design-in-memory-file-system/)
