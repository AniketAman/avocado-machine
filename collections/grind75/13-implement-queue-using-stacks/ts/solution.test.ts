import {expect, test} from 'vitest';
import {MyQueue} from './solution';
test('maintains FIFO order across interleaved operations', () => {
  const q = new MyQueue();
  expect(q.empty()).toBe(true);
  q.push(1); q.push(2);
  expect(q.peek()).toBe(1);
  expect(q.pop()).toBe(1);
  q.push(3);
  expect(q.pop()).toBe(2);
  expect(q.pop()).toBe(3);
  expect(q.empty()).toBe(true);
});
