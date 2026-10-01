import {test} from 'node:test';
import assert from 'node:assert/strict';
import {startTui} from '../src/tui.mjs';

test('startTui is exported and callable', () => {
  assert.equal(typeof startTui, 'function');
});
