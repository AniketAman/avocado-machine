import {expect, test} from 'vitest';
import {solve} from './solution';

test('one pair', () => { expect(solve(1)).toEqual(['()']); });
test('three pairs in any order', () => {
  expect(solve(3).sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort());
});
