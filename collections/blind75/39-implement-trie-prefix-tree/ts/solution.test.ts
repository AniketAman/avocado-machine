import { expect, test } from "vitest";
import { PrefixTree } from "./solution";

const cases = [
  {
    args: [["ab", "ac"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abb", "acc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbb", "accc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbb", "acccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbb", "accccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbb", "acccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbb", "accccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbb", "acccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbb", "accccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbb", "acccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbb", "accccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbb", "acccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbb", "accccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbb", "acccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbb", "accccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbbb", "acccccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbbbb", "accccccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbbbbb", "acccccccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbbbbbb", "accccccccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
  {
    args: [["abbbbbbbbbbbbbbbbbbbb", "acccccccccccccccccccc"]],
    expected: [false, true, false, true, false, true],
  },
];

test.each(cases)("case %#", ({ args, expected }) => {
  const trie = new PrefixTree();
  const [a, b] = args[0];
  const actual = [trie.search(a)];
  trie.insert(a);
  actual.push(
    trie.search(a),
    trie.search(a.slice(0, -1)),
    trie.startsWith(a.slice(0, -1)),
    trie.search(b),
  );
  trie.insert(b);
  actual.push(trie.search(b));
  expect(actual).toEqual(expected);
});

test("Apple", () => {
  const trie = new PrefixTree();
  trie.insert("apple");
  expect(trie.search("app")).toBe(false);
  expect(trie.search("apple")).toBe(true);
  expect(trie.startsWith("app")).toBe(true);
  expect(trie.startsWith("apple")).toBe(true);
});

// ["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]
test("Another one", () => {
  const trie = new PrefixTree()
  trie.insert("dog")
  expect(trie.search("dog")).toBe(true)
  expect(trie.search("do")).toBe(false)
  expect(trie.startsWith("do")).toBe(true)
  trie.insert("do")
  expect(trie.search("do")).toBe(true)
});
