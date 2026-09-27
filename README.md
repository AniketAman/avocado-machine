# Avocado Machine

A repository-local coding practice library with SM-2 review scheduling and an Ink terminal interface.

## Setup

Use Node.js 24 (see `.nvmrc`), then run:

```sh
npm install
npm link
```

Run the commands from this repository. `npm link` makes the `avocado` command available in your shell.

## Practice

```sh
avocado                  # Open the TUI
avocado practice         # Open the collection picker
avocado practice dsa     # Show 3 due reviews and 3 new problems
avocado practice dsa 15  # Show 15 problems, due first
```

Within the TUI, use `/practice`, `/practice dsa 15`, or `/done 1 5`. The equivalent shell command is `avocado done dsa 1 5`. A grade is an integer from 0 (complete blackout) to 5 (easy recall). Grading is manual and is the only action that changes scheduling metadata.

Use the arrow keys to highlight a problem and Enter to start it. Starting saves the current `solution.ts` under `attempts/` and copies `solution.template.ts` into `solution.ts`. An untouched starter on a new problem needs no redundant archive. Open the solution in your editor, then return to the TUI and press `t` to run its tests. Press `s` to search the whole collection, including problems outside the initial suggestions; those extra matches appear under **In current collection**. Press `c` to clear search, `/` for commands, and `q` to quit.

Reviews due today or earlier remain eligible. The default view shows the three oldest due reviews and three new problems, filling empty slots from the other category. A numeric count shows that many problems total, taking due reviews first. SM-2 uses 1-day and 6-day initial intervals, then ease-based intervals; weak grades restart at tomorrow with no same-day retry.

## Add a problem

```sh
avocado add dsa "Binary Search"
```

This assigns the next permanent number in `dsa` and creates `description.md`, a pending `solution.test.ts`, `solution.template.ts`, `solution.ts`, and `metadata.json` in `collections/dsa/<number>-binary-search/`. The current runner is TypeScript/Vitest. Complete the description, tests, and template to make the problem useful. The metadata and attempt archives are tracked in Git with the problem.

Run all framework and exercise tests with `npm test`. To test one problem from the shell, run the command shown in its TUI preview, for example:

```sh
npx vitest run collections/dsa/1-lfu-cache/solution.test.ts
```
