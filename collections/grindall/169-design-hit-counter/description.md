# Queue: Design Hit Counter (Medium)

**Topic:** Queue | **Difficulty:** Medium

Count hits in the preceding 300 seconds, inclusive of the current timestamp, from timestamps given in nondecreasing order.

## TypeScript interface

```ts
export class HitCounter {
  hit(timestamp: number): void { throw new Error('Not implemented'); }
  getHits(timestamp: number): number { throw new Error('Not implemented'); }
}
```

## Examples

See the focused cases in `ts/solution.test.ts`.

Source: [LeetCode problem](https://leetcode.com/problems/design-hit-counter/)
