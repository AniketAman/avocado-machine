class TrieNode {
  children: (TrieNode | null)[] = [];
  constructor(public endOfWord = false) {}
}

export class WordDictionary {
  root = new TrieNode();
  a = 97;
  addWord(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      const cIdx = c.charCodeAt(0) - this.a;

      curr.children[cIdx] =
        curr.children[cIdx] || new TrieNode(i === word.length - 1);
      curr = curr.children[cIdx];
    }
  }
  search(pattern: string): boolean {
    return this.dfs(pattern, this.root);
  }
  dfs(pattern: string, root: TrieNode): boolean {
    if (pattern === "" && root.endOfWord) return true;

    let curr = root;
    for (let i = 0; i < pattern.length; i++) {
      const c = pattern[i];
      if (c === ".")
        return curr.children
          .filter((child): child is TrieNode => !!child)
          .some((child) => this.dfs(pattern.slice(i + 1), child));

      const cIdx = c.charCodeAt(0) - this.a;
      if (curr.children[cIdx] == null) return false;
      if (i === pattern.length - 1 && curr.children[cIdx].endOfWord) return true;
      curr = curr.children[cIdx];
    }
    return false;
  }
}
