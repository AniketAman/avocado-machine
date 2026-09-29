import {expect, test} from 'vitest';
import {FreqStack} from './solution';

test('frequency and recency determine pop order', () => {
  const stack = new FreqStack();
  for (const value of [5, 7, 5, 7, 4, 5]) stack.push(value);
  expect([stack.pop(), stack.pop(), stack.pop(), stack.pop()]).toEqual([5, 7, 5, 4]);
});

test('a single value can be pushed and popped repeatedly', () => {
  const stack = new FreqStack();
  stack.push(1);
  stack.push(1);
  expect([stack.pop(), stack.pop()]).toEqual([1, 1]);
});
