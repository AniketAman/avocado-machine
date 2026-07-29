import { LFU } from "./lfu";
import { test, describe, expect } from "vitest";

describe("LRU", () => {
  test("should return null if cache not found", () => {
    const lfu = new LFU(3);
    expect(lfu.get("a")).toBeNull();
  });

  test("should return value if cach item exists", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    expect(lfu.get("a")).toEqual(1);
  });

  test("should evict value if capacity reached", () => {
    const lfu = new LFU(3);
    lfu.put("a", 1);
    lfu.put("b", 2);
    lfu.put("c", 3);
    lfu.put("d", 4);

    expect(lfu.get("a")).toBeNull();
  });

  test("should evict LFU value if capacity reached", () => {
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

  test("should evict LRU value if there is a tie on frequencye", () => {
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
});
