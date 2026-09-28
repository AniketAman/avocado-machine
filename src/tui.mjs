import React, {useState} from 'react';
import {Box, Text, render, useApp, useInput} from 'ink';
import fs from 'node:fs';
import path from 'node:path';
import {collections, gradeProblem, isDue, localDate, problems, runTests, searchGroups, solutionPath, startProblem, status, suggestions, testCommand} from './core.mjs';

const h = React.createElement;

function section(title, items, selectedId, today, color) {
  if (!items.length) return null;
  return h(Box, {key: title, flexDirection: 'column', marginBottom: 1},
    h(Text, {bold: true, color}, `${title} (${items.length})`),
    ...items.map(item => h(Text, {key: `${item.collection}-${item.id}`, color: item.id === selectedId ? 'black' : undefined, backgroundColor: item.id === selectedId ? 'cyan' : undefined},
      `${item.id === selectedId ? '›' : ' '} ${String(item.id).padStart(3)}  ${item.title}  ·  ${status(item, today)}${item.sm2.lastGrade === null ? '' : `  ·  last ${item.sm2.lastGrade}`}`)));
}

function App({initialCollection, initialCount, initialMode = 'practice'}) {
  const {exit} = useApp();
  const [screen, setScreen] = useState(initialCollection ? 'practice' : 'home');
  const [collection, setCollection] = useState(initialCollection ?? null);
  const [count, setCount] = useState(initialCount);
  const [practiceMode, setPracticeMode] = useState(initialMode);
  const [items, setItems] = useState(initialCollection ? problems(initialCollection) : []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mode, setMode] = useState(null);
  const [draft, setDraft] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [testing, setTesting] = useState(false);
  const today = localDate();
  const eligible = practiceMode === 'new' ? items.filter(item => item.sm2.lastGrade === null) : practiceMode === 'review' ? items.filter(item => isDue(item, today)) : items;
  const selected = screen === 'practice' ? suggestions(eligible, count, today, practiceMode) : {due: [], fresh: []};
  const groups = screen === 'practice' ? searchGroups(eligible, selected, query, today) : {due: [], fresh: [], current: []};
  const rows = [...groups.due, ...groups.fresh, ...groups.current];
  const safeIndex = Math.min(selectedIndex, Math.max(0, rows.length - 1));
  const highlighted = rows[safeIndex];
  const names = collections();

  function openPractice(name, limit, kind = practiceMode) {
    const loaded = problems(name);
    setCollection(name);
    setCount(limit);
    setPracticeMode(kind);
    setItems(loaded);
    setSelectedIndex(0);
    setQuery('');
    setTestResult(null);
    setScreen('practice');
    setMessage(`Opened ${name}`);
  }

  function executeCommand(command) {
    const parts = command.trim().split(/\s+/);
    const verb = parts[0]?.toLowerCase();
    try {
      if (['/practice', '/new', '/review'].includes(verb)) {
        const kind = verb.slice(1);
        if (parts.length === 1) {
          setPracticeMode(kind);
          setScreen('collections');
          setSelectedIndex(0);
          setMessage('Choose a collection');
        } else if (parts.length <= 3) {
          const limit = parts[2] === undefined ? undefined : Number(parts[2]);
          if (parts[2] !== undefined && (!Number.isSafeInteger(limit) || limit < 1)) throw new Error('Count must be a positive integer');
          openPractice(parts[1], limit, kind);
        } else throw new Error(`Usage: ${verb} [collection] [count]`);
      } else if (verb === '/done') {
        if (!collection || parts.length !== 3) throw new Error('Usage: /done <number> <grade> from a collection');
        const id = Number(parts[1]);
        const grade = Number(parts[2]);
        if (!Number.isSafeInteger(id) || !items.some(item => item.id === id)) throw new Error('Choose a valid problem number in this collection');
        const updated = gradeProblem(collection, id, grade);
        setItems(problems(collection));
        setMessage(`#${id} graded ${grade}; next review ${updated.sm2.dueDate}`);
      } else if (verb === '/help') {
        setMessage('/practice, /new, /review [collection] [count] · /done <number> <grade> · /quit');
      } else if (verb === '/quit') exit();
      else throw new Error(`Unknown command: ${verb || command}`);
    } catch (error) {
      setMessage(error.message);
    }
  }

  function selectHighlighted() {
    if (screen === 'collections') {
      const name = names[Math.min(selectedIndex, names.length - 1)];
      if (name) openPractice(name);
      return;
    }
    if (screen === 'home') {
      setScreen('collections');
      setSelectedIndex(0);
      return;
    }
    if (!highlighted) return;
    setMessage(`#${highlighted.id} solution: ${path.relative(process.cwd(), solutionPath(highlighted))}`);
  }

  function archiveAndResetHighlighted() {
    if (!highlighted) return;
    try {
      const result = startProblem(collection, highlighted.id);
      setMessage(`#${highlighted.id} new attempt: ${path.relative(process.cwd(), result.solution)}${result.archive ? ` · archived ${path.relative(process.cwd(), result.archive)}` : ' · no changed solution to archive'}`);
      setTestResult(null);
    } catch (error) {
      setMessage(error.message);
    }
  }

  function testHighlighted() {
    if (!highlighted) return;
    const problem = highlighted;
    setTesting(true);
    setTestResult(null);
    setMessage(`Running tests for #${problem.id}…`);
    runTests(problem).then(result => {
      setTesting(false);
      setTestResult(result);
      setMessage(`Tests for #${problem.id} ${result.code === 0 ? 'passed' : 'failed'}`);
    }).catch(error => {
      setTesting(false);
      setMessage(`Test runner failed: ${error.message}`);
    });
  }

  useInput((input, key) => {
    if (mode) {
      if (key.escape) {
        setMode(null);
        setDraft('');
        return;
      }
      if (key.return) {
        if (mode === 'command') executeCommand(draft);
        else setQuery(draft);
        setMode(null);
        setDraft('');
        setSelectedIndex(0);
        return;
      }
      if (key.backspace || key.delete) {
        const next = draft.slice(0, -1);
        setDraft(next);
        if (mode === 'search') { setQuery(next); setSelectedIndex(0); }
        return;
      }
      if (input && !key.ctrl && !key.meta && !key.upArrow && !key.downArrow) {
        const next = draft + input;
        setDraft(next);
        if (mode === 'search') { setQuery(next); setSelectedIndex(0); }
      }
      return;
    }
    if (input.startsWith('/')) { setMode('command'); setDraft(input); return; }
    if (input === 's' && screen === 'practice') { setMode('search'); setDraft(query); return; }
    if (input === 'c' && screen === 'practice') { setQuery(''); setSelectedIndex(0); return; }
    if (input === 't' && screen === 'practice' && !testing) { testHighlighted(); return; }
    if (input === 'a' && screen === 'practice' && !testing) { archiveAndResetHighlighted(); return; }
    if (input === 'x' && screen === 'practice') { setTestResult(null); setMessage(''); return; }
    if (input === 'q') { exit(); return; }
    if (key.upArrow || input === 'k') setSelectedIndex(index => Math.max(0, index - 1));
    else if (key.downArrow || input === 'j') setSelectedIndex(index => Math.min((screen === 'collections' ? names.length : rows.length) - 1, index + 1));
    else if (key.return) selectHighlighted();
    else if (key.escape && screen === 'practice') { setScreen('collections'); setSelectedIndex(0); setQuery(''); }
  });

  const preview = highlighted ? fs.readFileSync(path.join(highlighted.dir, 'description.md'), 'utf8').trim().split('\n').slice(0, 14).join('\n') : '';
  const output = testResult?.output;
  const listLabel = practiceMode === 'practice'
    ? count === undefined ? '3 due + 3 new' : `${count} suggestions`
    : `${count ?? 3} ${practiceMode === 'new' ? `new problem${count === 1 ? '' : 's'}` : `due review${count === 1 ? '' : 's'}`}`;

  return h(Box, {flexDirection: 'column', paddingX: 1},
    h(Text, {bold: true, color: 'green'}, '🥑 AVOCADO MACHINE  ·  local code kata practice'),
    h(Text, {dimColor: true}, screen === 'practice' ? `${collection}  ·  TypeScript (ts)  ·  ${listLabel}  ·  ${items.length} problems` : 'Practice collections'),
    screen === 'home' ? h(Box, {flexDirection: 'column', marginTop: 1},
      h(Text, null, 'Press Enter or type /practice to choose a collection.'),
      h(Text, null, 'Type /practice dsa 15 to open a list directly.'),
      h(Text, null, 'Use /new dsa or /review dsa for one category.'),
      h(Text, {dimColor: true}, `${names.length} collection${names.length === 1 ? '' : 's'} available`)) : null,
    screen === 'collections' ? h(Box, {flexDirection: 'column', marginTop: 1},
      h(Text, {bold: true, color: 'cyan'}, 'Collections'),
      ...(names.length ? names.map((name, index) => h(Text, {key: name, color: index === selectedIndex ? 'black' : undefined, backgroundColor: index === selectedIndex ? 'cyan' : undefined}, `${index === selectedIndex ? '›' : ' '} ${name}`)) : [h(Text, {key: 'empty'}, 'No collections yet. Use avocado add <collection> "Title".')])) : null,
    screen === 'practice' ? h(Box, {flexDirection: 'row', gap: 2, marginTop: 1},
      h(Box, {flexDirection: 'column', width: '50%', borderStyle: 'round', borderColor: 'green', paddingX: 1},
        section('Due reviews', groups.due, highlighted?.id, today, 'yellow'),
        section('New problems', groups.fresh, highlighted?.id, today, 'green'),
        section('In current collection', groups.current, highlighted?.id, today, 'cyan'),
        rows.length === 0 ? h(Text, {dimColor: true}, query ? 'No matching problems' : 'No problems to practice') : null),
      h(Box, {flexDirection: 'column', width: '50%', borderStyle: 'round', borderColor: 'cyan', paddingX: 1},
        h(Text, {bold: true, color: 'cyan'}, highlighted ? `#${highlighted.id} ${highlighted.title}` : 'Preview'),
        highlighted ? h(Text, {dimColor: true}, `${status(highlighted, today)} · last grade ${highlighted.sm2.lastGrade ?? '—'}`) : null,
        h(Text, null, preview || 'Select a problem to see its description.'),
        highlighted ? h(Text, {color: 'blue'}, testCommand(highlighted)) : null,
        highlighted ? h(Text, {color: 'green'}, path.relative(process.cwd(), solutionPath(highlighted))) : null)) : null,
    message ? h(Text, {color: 'yellow'}, message) : null,
    output ? h(Box, {flexDirection: 'column', borderStyle: 'round', borderColor: testResult.code === 0 ? 'green' : 'red', paddingX: 1},
      h(Text, {bold: true}, `Test output · exit ${testResult.code}`), h(Text, null, output)) : null,
    h(Text, {dimColor: true}, mode === 'command' ? `Command: ${draft}` : mode === 'search' ? `Search: ${draft}` : screen === 'practice' ? '↑↓ navigate · Enter show path · t test selected · a archive and reset · x clear output · s search · c clear search · / command · Esc collections · q quit' : '↑↓ navigate · Enter select · / command · q quit'));
}

export function startTui(options = {}) {
  const instance = render(h(App, options));
  return instance.waitUntilExit();
}
