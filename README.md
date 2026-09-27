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

Within the TUI, use `/practice`, `/practice dsa 15`, or `/done 1 5`. The equivalent shell command is `avocado done dsa 1 5`. A grade is an integer from 0 (complete blackout) to 5 (easy recall). Grading is manual and is the only action that changes scheduling metadata. Grades belong to a language variant; the current runner and commands use TypeScript (`ts`).

Use the arrow keys to highlight a problem and Enter to start it. Starting saves the current `ts/solution.ts` under `ts/attempts/` and copies `ts/solution.template.ts` into `ts/solution.ts`. An untouched starter on a new problem needs no redundant archive. Open the solution in your editor, then return to the TUI and press `t` to run its tests. Press `x` to clear the test output. Press `s` to search the whole collection, including problems outside the initial suggestions; those extra matches appear under **In current collection**. Press `c` to clear search, `/` for commands, and `q` to quit.

`collections/blind75` contains the 75 problems in NeetCode Blind 75 order. Each has a local description, a TypeScript starter, and 20 runnable cases. The 47 problems marked solved in the linked NeetCode account were imported with grade 5 on September 27, 2026, and are due for review on September 28. All solution files are fresh starters for repeat practice.

Language files live under short, lowercase language folders: `ts/` today, with `py/` and `go/` reserved for future runners. A problem's description and number stay shared; each language folder will hold its own starter, solution, tests, and attempt archive. `metadata.json` keeps a separate review schedule for each language. Python and Go execution are not implemented yet.

Reviews due today or earlier remain eligible. The default view shows the three oldest due reviews and three new problems, filling empty slots from the other category. A numeric count shows that many problems total, taking due reviews first. SM-2 uses 1-day and 6-day initial intervals, then ease-based intervals; weak grades restart at tomorrow with no same-day retry.

## Add a problem

```sh
avocado add dsa "Binary Search"
```

This assigns the next permanent number in `dsa` and creates `description.md`, `metadata.json`, and a `ts/` directory containing a pending `solution.test.ts`, `solution.template.ts`, and `solution.ts`. The current runner is TypeScript/Vitest. Complete the description, tests, and template to make the problem useful. Each language variant has its own review schedule and attempt archive.

Run the framework checks with `node --test tests/*.test.mjs`. `npm test` also runs every exercise test; fresh starters intentionally fail those tests until you solve them. To test one problem from the shell, run the command shown in its TUI preview, for example:

```sh
npx vitest run collections/dsa/1-lfu-cache/ts/solution.test.ts
```
