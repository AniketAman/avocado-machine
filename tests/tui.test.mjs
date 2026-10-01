import {test} from 'node:test';
import assert from 'node:assert/strict';
import {startTui, renderMarkdownLines} from '../src/tui.mjs';

test('startTui is exported and callable', () => {
  assert.equal(typeof startTui, 'function');
});

test('renderMarkdownLines handles empty content', () => {
  const lines = renderMarkdownLines('', 5, 40);
  assert.deepEqual(lines, ['Select a problem to see its description.']);
});

test('renderMarkdownLines caps output to maxLines and reflows to width', () => {
  const longText = 'This is a very long sentence that will definitely need to wrap across multiple lines because the target width is small.';
  const lines = renderMarkdownLines(longText, 2, 30);
  assert.equal(lines.length <= 2, true);
  for (const line of lines) {
    const clean = line.replace(/\u001b\[[0-9;]*m/g, '');
    assert.equal(clean.length <= 30, true);
  }
});
