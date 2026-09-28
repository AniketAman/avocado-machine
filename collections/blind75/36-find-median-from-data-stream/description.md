# Find Median From Data Stream (Hard)

**Topic:** Heap / Priority Queue · **Difficulty:** Hard

Maintain a stream of integers and return its median whenever requested.

## TypeScript interface

`class MedianFinder { addNum(num: number): void; findMedian(): number }`

## Example

`after adding 1 and 3, findMedian() → 2`

## Rules

For an even count, average the two middle values. findMedian is called only after at least one insertion.

Source: [NeetCode problem](https://neetcode.io/problems/find-median-in-a-data-stream/)
