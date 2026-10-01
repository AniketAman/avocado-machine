import React, {useState} from 'react';
import {Box, Text, render, useApp, useInput, useWindowSize} from 'ink';
import fs from 'node:fs';
import path from 'node:path';
import {collections, gradeProblem, isDue, localDate, problems, runTests, searchGroups, solutionPath, startProblem, status, suggestions, testCommand} from './core.mjs';

const h = React.createElement;

function renderPracticeList(groups, highlightedId, safeIndex, today, capacity) {
  const activeSections = [
    {title: 'Due reviews', items: groups.due, color: 'yellow'},
    {title: 'New problems', items: groups.fresh, color: 'green'},
    {title: 'In current collection', items: groups.current, color: 'cyan'}
  ].filter(s => s.items.length > 0);

  if (!activeSections.length) return null;

  const totalLines = activeSections.reduce((acc, s) => acc + 1 + s.items.length, 0);
  if (totalLines <= capacity) {
    return activeSections.map(s => h(Box, {key: s.title, flexDirection: 'column', marginBottom: 1},
      h(Text, {bold: true, color: s.color}, `${s.title} (${s.items.length})`),
      ...s.items.map(item => h(Text, {key: `${item.collection}-${item.id}`, color: item.id === highlightedId ? 'black' : undefined, backgroundColor: item.id === highlightedId ? 'cyan' : undefined},
        `${item.id === highlightedId ? '›' : ' '} ${String(item.id).padStart(3)}  ${item.title}  ·  ${status(item, today)}${item.sm2.lastGrade === null ? '' : `  ·  last ${item.sm2.lastGrade}`}`))));
  }

  const allRows = activeSections.flatMap(s => s.items.map(item => ({...item, sectionTitle: s.title, sectionColor: s.color})));
  const windowSize = Math.max(1, capacity - 2);
  let start = Math.max(0, Math.min(safeIndex - Math.floor(windowSize / 2), Math.max(0, allRows.length - windowSize)));
  let end = Math.min(allRows.length, start + windowSize);

  function buildElements(s, e) {
    const res = [];
    if (s > 0) res.push(h(Text, {key: 'scroll-up', dimColor: true}, `▲ ${s} more above`));
    let lastSection = null;
    for (let i = s; i < e; i++) {
      const item = allRows[i];
      if (item.sectionTitle !== lastSection) {
        lastSection = item.sectionTitle;
        res.push(h(Text, {key: `sec-${item.sectionTitle}`, bold: true, color: item.sectionColor}, item.sectionTitle));
      }
      res.push(h(Text, {key: `${item.collection}-${item.id}`, color: item.id === highlightedId ? 'black' : undefined, backgroundColor: item.id === highlightedId ? 'cyan' : undefined},
        `${item.id === highlightedId ? '›' : ' '} ${String(item.id).padStart(3)}  ${item.title}  ·  ${status(item, today)}${item.sm2.lastGrade === null ? '' : `  ·  last ${item.sm2.lastGrade}`}`));
    }
    if (e < allRows.length) res.push(h(Text, {key: 'scroll-down', dimColor: true}, `▼ ${allRows.length - e} more below`));
    return res;
  }

  let elements = buildElements(start, end);
  while (elements.length > capacity && end - start > 1) {
    if (safeIndex - start < end - 1 - safeIndex) end--;
    else start++;
    elements = buildElements(start, end);
  }
  return elements;
}

function renderShortcuts(items) {
  return h(Box, {flexDirection: 'row', flexWrap: 'wrap'},
    ...items.map(([key, label], i) => h(Text, {key: `${key}-${label}`},
      h(Text, {bold: true, color: 'cyan'}, `[${key}]`),
      h(Text, {dimColor: true}, ` ${label}${i < items.length - 1 ? '  ' : ''}`)
    ))
  );
}

function renderCollectionsList(names, selectedIndex, capacity) {
  if (!names.length) {
    return [h(Text, {key: 'empty'}, 'No collections yet. Use avocado add <collection> "Title".')];
  }
  const totalNeeded = 1 + names.length;
  if (totalNeeded <= capacity) {
    return [
      h(Text, {key: 'title', bold: true, color: 'cyan'}, 'Collections'),
      ...names.map((name, index) => h(Text, {key: name, color: index === selectedIndex ? 'black' : undefined, backgroundColor: index === selectedIndex ? 'cyan' : undefined}, `${index === selectedIndex ? '›' : ' '} ${name}`))
    ];
  }
  const windowSize = Math.max(1, capacity - 3);
  const start = Math.max(0, Math.min(selectedIndex - Math.floor(windowSize / 2), Math.max(0, names.length - windowSize)));
  const end = Math.min(names.length, start + windowSize);
  const elements = [h(Text, {key: 'title', bold: true, color: 'cyan'}, 'Collections')];
  if (start > 0) elements.push(h(Text, {key: 'scroll-up', dimColor: true}, `▲ ${start} more above`));
  for (let i = start; i < end; i++) {
    const name = names[i];
    elements.push(h(Text, {key: name, color: i === selectedIndex ? 'black' : undefined, backgroundColor: i === selectedIndex ? 'cyan' : undefined}, `${i === selectedIndex ? '›' : ' '} ${name}`));
  }
  if (end < names.length) elements.push(h(Text, {key: 'scroll-down', dimColor: true}, `▼ ${names.length - end} more below`));
  return elements;
}

function App({initialCollection, initialCount, initialMode = 'practice'}) {
  const {exit} = useApp();
  const {columns: termColumns = 80, rows: termRows = 24} = useWindowSize();
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

  if (termColumns < 60 || termRows < 15) {
    return h(Box, {flexDirection: 'column', width: termColumns, height: termRows, justifyContent: 'center', alignItems: 'center'},
      h(Text, {color: 'yellow', bold: true}, 'Terminal too small'),
      h(Text, {dimColor: true}, `Current: ${termColumns}x${termRows} · Minimum: 60x15`),
      h(Text, {dimColor: true}, 'Please enlarge your terminal window (or press q to exit)'));
  }

  const output = testResult?.output;
  const testBoxHeight = output ? Math.min(Math.max(4, Math.floor(termRows * 0.28)), 10) : 0;
  const shortcutLines = screen === 'practice' ? (termColumns < 130 ? 2 : 1) : 1;
  const messageLines = message ? 1 : 0;
  const footerHeight = (mode ? 1 : shortcutLines) + messageLines;
  const bodyHeight = Math.max(4, termRows - 2 - testBoxHeight - footerHeight);
  const innerCapacity = Math.max(2, bodyHeight - 2);
  const descLines = Math.max(1, innerCapacity - 4);
  const preview = highlighted ? fs.readFileSync(path.join(highlighted.dir, 'description.md'), 'utf8').trim().split('\n').slice(0, descLines).join('\n') : '';

  const listLabel = practiceMode === 'practice'
    ? count === undefined ? '3 due + 3 new' : `${count} suggestions`
    : `${count ?? 3} ${practiceMode === 'new' ? `new problem${count === 1 ? '' : 's'}` : `due review${count === 1 ? '' : 's'}`}`;

  return h(Box, {flexDirection: 'column', width: termColumns, height: termRows, paddingX: 1},
    h(Box, {height: 2, flexDirection: 'column'},
      h(Text, {bold: true, color: 'green'}, '🥑 AVOCADO MACHINE  ·  local code kata practice'),
      h(Text, {dimColor: true}, screen === 'practice' ? `${collection}  ·  TypeScript (ts)  ·  ${listLabel}  ·  ${items.length} problems` : screen === 'collections' ? 'Practice collections' : 'Home')),
    screen === 'home' ? h(Box, {flexDirection: 'column', height: bodyHeight, borderStyle: 'round', borderColor: 'green', paddingX: 1, paddingY: 1},
      h(Text, {bold: true, color: 'green'}, 'Welcome to Avocado Machine'),
      h(Text, null, ''),
      h(Text, null, '• Press Enter or type /practice to choose a collection.'),
      h(Text, null, '• Type /practice dsa 15 to open a list directly.'),
      h(Text, null, '• Use /new dsa or /review dsa for one category.'),
      h(Text, null, ''),
      h(Text, {dimColor: true}, `${names.length} collection${names.length === 1 ? '' : 's'} available`)) : null,
    screen === 'collections' ? h(Box, {flexDirection: 'column', height: bodyHeight, borderStyle: 'round', borderColor: 'cyan', paddingX: 1},
      ...renderCollectionsList(names, selectedIndex, innerCapacity)) : null,
    screen === 'practice' ? h(Box, {flexDirection: 'row', gap: 1, height: bodyHeight},
      h(Box, {flexDirection: 'column', flexGrow: 1, flexBasis: 0, height: bodyHeight, borderStyle: 'round', borderColor: 'green', paddingX: 1},
        renderPracticeList(groups, highlighted?.id, safeIndex, today, innerCapacity),
        rows.length === 0 ? h(Text, {dimColor: true}, query ? 'No matching problems' : 'No problems to practice') : null),
      h(Box, {flexDirection: 'column', flexGrow: 1, flexBasis: 0, height: bodyHeight, borderStyle: 'round', borderColor: 'cyan', paddingX: 1},
        h(Text, {bold: true, color: 'cyan'}, highlighted ? `#${highlighted.id} ${highlighted.title}` : 'Preview'),
        highlighted ? h(Text, {dimColor: true}, `${status(highlighted, today)} · last grade ${highlighted.sm2.lastGrade ?? '—'}`) : null,
        h(Box, {flexGrow: 1, flexDirection: 'column'},
          h(Text, null, preview || 'Select a problem to see its description.')),
        highlighted ? h(Text, {color: 'blue'}, testCommand(highlighted)) : null,
        highlighted ? h(Text, {color: 'green'}, path.relative(process.cwd(), solutionPath(highlighted))) : null)) : null,
    output ? h(Box, {flexDirection: 'column', height: testBoxHeight, borderStyle: 'round', borderColor: testResult.code === 0 ? 'green' : 'red', paddingX: 1},
      h(Text, {bold: true}, `Test output · exit ${testResult.code} · press x to clear`),
      h(Text, null, output.split('\n').slice(-Math.max(1, testBoxHeight - 3)).join('\n'))) : null,
    h(Box, {height: footerHeight, flexDirection: 'column'},
      message ? h(Text, {color: 'yellow'}, message) : null,
      mode === 'command'
        ? h(Box, {flexDirection: 'row'},
            h(Text, {bold: true, color: 'yellow'}, 'Command: '),
            h(Text, null, draft),
            h(Text, {dimColor: true}, '  ·  '),
            h(Text, {bold: true, color: 'cyan'}, '[Enter]'),
            h(Text, {dimColor: true}, ' execute  '),
            h(Text, {bold: true, color: 'cyan'}, '[Esc]'),
            h(Text, {dimColor: true}, ' cancel'))
        : mode === 'search'
        ? h(Box, {flexDirection: 'row'},
            h(Text, {bold: true, color: 'yellow'}, 'Search: '),
            h(Text, null, draft),
            h(Text, {dimColor: true}, '  ·  '),
            h(Text, {bold: true, color: 'cyan'}, '[Enter]'),
            h(Text, {dimColor: true}, ' apply  '),
            h(Text, {bold: true, color: 'cyan'}, '[Esc]'),
            h(Text, {dimColor: true}, ' cancel'))
        : screen === 'practice'
        ? renderShortcuts([
            ['↑↓', 'navigate'],
            ['Enter', 'path'],
            ['t', 'test'],
            ['a', 'reset attempt'],
            ['x', 'clear output'],
            ['s', 'search'],
            ['c', 'clear search'],
            ['/', 'command'],
            ['Esc', 'collections'],
            ['q', 'quit']
          ])
        : renderShortcuts([
            ['↑↓', 'navigate'],
            ['Enter', 'select'],
            ['/', 'command'],
            ['q', 'quit']
          ])));
}

export function startTui(options = {}) {
  const instance = render(h(App, options), {alternateScreen: true});
  return instance.waitUntilExit();
}

