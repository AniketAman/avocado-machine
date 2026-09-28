import {expect, test} from 'vitest';
import {letterCombinations} from './solution';
test('builds keypad combinations', () => {
  expect(letterCombinations('23').sort()).toEqual(['ad','ae','af','bd','be','bf','cd','ce','cf']);
  expect(letterCombinations('7').sort()).toEqual(['p','q','r','s']);
  expect(letterCombinations('')).toEqual([]);
});
