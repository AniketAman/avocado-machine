import { expect, test } from "vitest";
import { PrefixTree } from "./solution";

test("distinguishes a complete word from a prefix", () => {
  const trie = new PrefixTree();
  expect(trie.search("app")).toBe(false);
  expect(trie.startsWith("app")).toBe(false);
  trie.insert("apple");
  expect(trie.search("app")).toBe(false);
  expect(trie.startsWith("app")).toBe(true);
  expect(trie.search("apple")).toBe(true);
});

test("inserting a shorter word later marks an existing branch as complete", () => {
  const trie = new PrefixTree();
  trie.insert("apple");
  trie.insert("app");
  expect(trie.search("app")).toBe(true);
  expect(trie.search("apple")).toBe(true);
  expect(trie.startsWith("appl")).toBe(true);
});

test("shared prefixes and duplicate inserts do not add unrelated words", () => {
  const trie = new PrefixTree();
  trie.insert("car");
  trie.insert("cat");
  trie.insert("car");
  expect(trie.search("car")).toBe(true);
  expect(trie.search("cat")).toBe(true);
  expect(trie.search("cap")).toBe(false);
  expect(trie.startsWith("ca")).toBe(true);
  expect(trie.startsWith("cab")).toBe(false);
});
