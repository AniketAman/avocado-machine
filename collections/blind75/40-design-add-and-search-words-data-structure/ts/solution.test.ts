import { expect, test } from "vitest";
import { WordDictionary } from "./solution";

test("searches complete words and treats each dot as exactly one letter", () => {
  const dict = new WordDictionary();
  dict.addWord("bad");
  dict.addWord("dad");
  dict.addWord("mad");

  expect(dict.search("bad")).toBe(true);
  expect(dict.search(".ad")).toBe(true);
  expect(dict.search("b..")).toBe(true);
  expect(dict.search("..d")).toBe(true);
  expect(dict.search("pad")).toBe(false);
  expect(dict.search("ba")).toBe(false);
  expect(dict.search("badx")).toBe(false);
});

test("a wildcard must explore another branch when the first branch is only a prefix", () => {
  const dict = new WordDictionary();
  dict.addWord("abce");
  dict.addWord("xbcd");
  expect(dict.search(".bcd")).toBe(true);
  expect(dict.search(".bc")).toBe(false);
});

test("adding a shorter word after a longer word marks the existing prefix as a word", () => {
  const dict = new WordDictionary();
  dict.addWord("apple");
  expect(dict.search("app")).toBe(false);
  dict.addWord("app");
  expect(dict.search("app")).toBe(true);
  expect(dict.search("a.p")).toBe(true);
  expect(dict.search("apple")).toBe(true);
});

test("adding a longer word preserves its already stored prefix", () => {
  const dict = new WordDictionary();
  dict.addWord("app");
  dict.addWord("apple");
  expect(dict.search("app")).toBe(true);
  expect(dict.search("apple")).toBe(true);
  expect(dict.search("appl")).toBe(false);
});
