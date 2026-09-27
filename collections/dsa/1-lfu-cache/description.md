# LFU Cache

Implement a least frequently used cache with a fixed capacity.

- `get(key)` returns the stored value or `null` when the key is absent.
- `put(key, value)` inserts or updates a value.
- When the cache is full, evict the least frequently used item. If frequencies tie, evict the least recently used item among them.
- A cache with zero capacity stores nothing.

The tests in `solution.test.ts` define the expected behavior.
