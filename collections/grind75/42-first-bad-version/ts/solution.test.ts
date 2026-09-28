import {expect, test} from 'vitest';
import {firstBadVersion} from './solution';
test.each([[1, 1], [5, 4], [1000, 783]])('finds first bad version %i of %i', (n, firstBad) => {
  let calls = 0;
  const found = firstBadVersion(n, version => { calls++; return version >= firstBad; });
  expect(found).toBe(firstBad);
  expect(calls).toBeLessThanOrEqual(Math.ceil(Math.log2(n)) + 2);
});
