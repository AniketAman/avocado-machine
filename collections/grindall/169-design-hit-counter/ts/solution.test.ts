import {expect, test} from 'vitest';
import {HitCounter} from './solution';

test('counts hits and evicts old timestamps', () => {
  const counter = new HitCounter();
  counter.hit(1);
  counter.hit(2);
  counter.hit(3);
  expect(counter.getHits(4)).toBe(3);
  counter.hit(300);
  expect(counter.getHits(300)).toBe(4);
  expect(counter.getHits(301)).toBe(3);
});

test('counts multiple hits at one timestamp', () => {
  const counter = new HitCounter();
  counter.hit(1);
  counter.hit(1);
  expect(counter.getHits(1)).toBe(2);
});
