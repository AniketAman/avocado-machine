import {expect, test} from 'vitest';
import {accountsMerge} from './solution';
const normalized = (groups: string[][]) => groups.map(([name, ...emails]) => [name, ...emails.sort()]).sort((a, b) => a.join('|').localeCompare(b.join('|')));
test('merges transitively and keeps unrelated accounts separate', () => {
  const accounts = [
    ['John', 'a@x', 'b@x'],
    ['John', 'c@x', 'b@x'],
    ['John', 'd@x'],
    ['John', 'c@x', 'e@x'],
    ['Mary', 'z@x'],
  ];
  expect(normalized(accountsMerge(accounts))).toEqual(normalized([
    ['John', 'a@x', 'b@x', 'c@x', 'e@x'],
    ['John', 'd@x'],
    ['Mary', 'z@x'],
  ]));
});
