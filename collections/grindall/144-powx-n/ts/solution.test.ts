import {expect, test} from 'vitest';
import {solve} from './solution';

test('positive, negative, and fractional bases', () => {
  expect(solve(2, 10)).toBe(1024);
  expect(solve(2, -2)).toBe(0.25);
  expect(solve(2.1, 3)).toBeCloseTo(9.261);
});
