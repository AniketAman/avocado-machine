import {expect, test} from 'vitest';
import {FileSystem} from './solution';

test('directories list in sorted order and files append content', () => {
  const fs = new FileSystem();
  expect(fs.ls('/')).toEqual([]);
  fs.mkdir('/a/b/c');
  fs.addContentToFile('/a/b/c/file', 'hello');
  fs.addContentToFile('/a/b/c/file', ' world');
  expect(fs.readContentFromFile('/a/b/c/file')).toBe('hello world');
  expect(fs.ls('/a/b/c')).toEqual(['file']);
  expect(fs.ls('/a/b/c/file')).toEqual(['file']);
});

test('sibling directory names sort alphabetically', () => {
  const fs = new FileSystem();
  fs.mkdir('/z');
  fs.mkdir('/a');
  expect(fs.ls('/')).toEqual(['a', 'z']);
});
