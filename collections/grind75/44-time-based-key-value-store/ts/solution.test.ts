import {expect, test} from 'vitest';
import {TimeMap} from './solution';
test('returns the latest value at or before each timestamp', () => {
  const store = new TimeMap();
  expect(store.get('foo', 1)).toBe('');
  store.set('foo', 'bar', 1);
  expect(store.get('foo', 1)).toBe('bar');
  expect(store.get('foo', 3)).toBe('bar');
  store.set('foo', 'baz', 4);
  expect(store.get('foo', 3)).toBe('bar');
  expect(store.get('foo', 4)).toBe('baz');
  store.set('other', 'x', 2);
  expect(store.get('other', 3)).toBe('x');
});
