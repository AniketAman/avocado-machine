import {expect, test} from 'vitest';
import {leastInterval} from './solution';
test.each([
  [['A','A','A','B','B','B'], 2, 8],
  [['A','A','A','B','B','B'], 0, 6],
  [['A','A','A','B','B','B'], 3, 10],
  [['A'], 4, 1],
])('schedules %j with cooldown %i', (tasks, n, expected) => {
  expect(leastInterval(tasks as string[], n as number)).toBe(expected);
});
