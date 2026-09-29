import {expect, test} from 'vitest';
import {solve} from './solution';

test('one queen', () => { expect(solve(1)).toEqual([['Q']]); });
test('four queens have two valid arrangements', () => {
  const boards = solve(4);
  expect(boards).toHaveLength(2);
  for (const board of boards) {
    expect(board).toHaveLength(4);
    const columns = board.map(row => row.indexOf('Q'));
    expect(columns.every(column => column >= 0)).toBe(true);
    expect(new Set(columns).size).toBe(4);
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) expect(Math.abs(columns[i] - columns[j])).not.toBe(j - i);
  }
});
