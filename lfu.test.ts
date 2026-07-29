import { LFU } from "./lfu";
import { test, describe, expect } from "vitest";

describe("LFU", () => {
  test("returns null if cache not found", () => {
    const lfu = new LFU(3);
    expect(lfu.get("a")).toBeNull();
  });

  test("returns value if cache item exists", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    expect(lfu.get("a")).toEqual(1);
  });

  test("evicts value if capacity reached", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    lfu.put("b", 2);
    lfu.put("c", 3);
    lfu.put("d", 4);

    expect(lfu.get("a")).toBeNull();
  });

  test("evicts LFU value if capacity reached", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    lfu.put("b", 2);
    lfu.put("c", 3);

    lfu.put("a", 11);
    lfu.get("b");

    lfu.put("d", 4);

    expect(lfu.get("a")).toBe(11);
    expect(lfu.get("b")).toBe(2);
    expect(lfu.get("c")).toBeNull();
    expect(lfu.get("d")).toBe(4);
  });

  test("evicts LRU value if there is a tie on frequency", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    lfu.put("b", 2);
    lfu.put("c", 3);

    lfu.get("b");
    lfu.put("a", 111);
    lfu.get("c");

    lfu.put("d", 3);

    expect(lfu.get("b")).toBeNull();
    expect(lfu.get("d")).toBe(3);
    expect(lfu.get("a")).toBe(111);
  });

  test("keeps capacity after evicting from a frequency bucket", () => {
    const lfu = new LFU(1);

    lfu.put("a", 1);
    lfu.put("b", 2);
    lfu.get("b");
    lfu.put("c", 3);

    expect(lfu.get("b")).toBeNull();
    expect(lfu.get("c")).toBe(3);
  });

  test("evicts LRU value when the capacity is 1", () => {
    const lfu = new LFU(1);
    lfu.put("a", 1);
    lfu.put("b", 2);

    expect(lfu.get("a")).toBeNull();
    expect(lfu.get("b")).toBe(2);
  });

  test("handles zero capacity correctly", () => {
    const lfu = new LFU(0);
    lfu.put("a", 1);
    expect(lfu.get("a")).toBeNull();
  });
});
