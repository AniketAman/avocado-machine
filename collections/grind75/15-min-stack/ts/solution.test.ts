import {expect, test} from 'vitest';
import {MinStack} from './solution';
test('tracks minimum through duplicate minima and pops', () => {
  const stack = new MinStack();
  stack.push(2); stack.push(1); stack.push(1);
  expect(stack.getMin()).toBe(1);
  stack.pop(); expect(stack.getMin()).toBe(1);
  stack.pop(); expect(stack.top()).toBe(2);
  expect(stack.getMin()).toBe(2);
  stack.push(-3); expect(stack.getMin()).toBe(-3);
});
