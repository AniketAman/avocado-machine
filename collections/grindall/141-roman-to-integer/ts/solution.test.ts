import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = ["III"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(3);
});

test("case 2", () => {
  const args = ["MCMXCIV"];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(1994);
});
