import {expect, test} from 'vitest';
import {RandomizedSet} from './solution';

test('insert and remove report whether the set changed', () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.insert(1)).toBe(false);
  expect(set.remove(2)).toBe(false);
  expect(set.insert(2)).toBe(true);
  expect([1, 2]).toContain(set.getRandom());
  expect(set.remove(1)).toBe(true);
  expect(set.getRandom()).toBe(2);
});
