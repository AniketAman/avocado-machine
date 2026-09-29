import {expect, test} from 'vitest';
import {solve} from './solution';

test("case 1", () => {
  const args = [["i","love","leetcode","i","love","coding"],2];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(["i","love"]);
});

test("case 2", () => {
  const args = [["the","day","is","sunny","the","the","the","sunny","is","is"],4];
  expect(solve(...args as Parameters<typeof solve>)).toEqual(["the","is","sunny","day"]);
});
