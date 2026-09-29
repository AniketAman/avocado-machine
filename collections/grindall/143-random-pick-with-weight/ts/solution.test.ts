import {expect, test, vi} from 'vitest';
import {WeightedPicker} from './solution';

test('a single positive weight always selects index zero', () => {
  const picker = new WeightedPicker([5]);
  expect(picker.pickIndex()).toBe(0);
});

test('boundary draws select the correct weighted bucket', () => {
  const random = vi.spyOn(Math, 'random');
  try {
    const picker = new WeightedPicker([1, 3]);
    random.mockReturnValueOnce(0).mockReturnValueOnce(0.25).mockReturnValueOnce(0.999);
    expect([picker.pickIndex(), picker.pickIndex(), picker.pickIndex()]).toEqual([0, 1, 1]);
  } finally { random.mockRestore(); }
});
