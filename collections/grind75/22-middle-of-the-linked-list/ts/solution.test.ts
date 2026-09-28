import {expect, test} from 'vitest';
import {middleNode, type ListNode} from './solution';
function list(values: number[]): ListNode | null {
  return values.reduceRight<ListNode | null>((next, val) => ({val, next}), null);
}
test.each([
  [[1, 2, 3, 4, 5], 3],
  [[1, 2, 3, 4, 5, 6], 4],
  [[7], 7],
])('finds middle in %j', (values, expected) => {
  expect(middleNode(list(values as number[]))?.val).toBe(expected);
});
test('empty list', () => expect(middleNode(null)).toBeNull());
