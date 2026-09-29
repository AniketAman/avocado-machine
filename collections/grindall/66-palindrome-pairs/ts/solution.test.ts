import {expect, test} from 'vitest';
import {solve} from './solution';

test('finds both orientations', () => {
  expect(solve(['bat', 'tab', 'cat']).sort()).toEqual([[0, 1], [1, 0]]);
});

test('an empty word pairs with a palindrome', () => {
  expect(solve(['a', '']).sort()).toEqual([[0, 1], [1, 0]]);
});
