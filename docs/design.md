# Personal kata machine: agreed design

## Problem library

- Problems belong to named collections such as `dsa` and `javascript`.
- Each problem has a permanent number within its collection and a directory such as `collections/dsa/35-binary-search/`.
- Each directory contains `description.md`, `solution.test.ts`, `solution.template.ts`, `solution.ts`, `metadata.json`, and an `attempts/` archive once attempts have been saved. There is no reference solution file.
- `metadata.json` stores the SM-2 scheduling state and a validated runtime key. The first supported runner is TypeScript/Vitest.
- Metadata and saved solutions are tracked in Git alongside the problem files.
- The existing LFU exercise moves into the `dsa` collection.

## Practice

- `avocado` opens the Ink application at a home screen with an in-app command line.
- `/practice` shows the available collections. Picking a collection opens its default practice list. `/practice dsa 15` opens a collection's 15-problem list directly. The equivalent shell form is `avocado practice dsa 15`.
- `avocado practice dsa` opens an Ink TUI showing up to three due reviews and three new problems. If one category has fewer than three, the other fills unused slots up to six total.
- `avocado practice dsa 15` shows up to 15 total problems, with due reviews first and new problems filling remaining slots.
- A review is due if its date is today or earlier in the local calendar. The oldest due reviews appear first, so overdue problems remain eligible. New problems follow in number order.
- The TUI groups due and new problems, supports keyboard navigation and search, and previews the description, due date, last grade, and test command.
- Search covers every problem in the active collection, including those outside the initial suggested list. Matches from the suggested list remain in their due/new sections; other matches appear under **In current collection** with their review status.
- Pressing Enter on a problem saves the current solution file under that problem's `attempts/` directory, then copies the starter template into `solution.ts`. An untouched starter on a new problem needs no redundant archive. The TUI shows the solution path. It does not launch an editor.
- The TUI can run the selected problem's tests and show their result. Test execution does not update scheduling state.

## Completion and scheduling

- `/done 35 5` in the TUI records recall grade 5 for problem 35 in the active collection. It can grade any problem in the displayed list. The equivalent shell command is `avocado done dsa 35 5`; it can grade a valid problem in that collection without reopening the TUI.
- Grades are integers from 0 through 5. Scheduling metadata changes only when a grade is submitted; selecting, editing, and running tests do not change it. A grade is not gated on test success.
- SM-2 uses its ease-factor calculation and review intervals of 1 day, 6 days, then the prior interval multiplied by the ease factor. A grade below 3 restarts the interval sequence and schedules tomorrow, with no same-day repeat.
- Due dates use local calendar days.

## Adding problems

- `avocado add dsa "Binary Search"` assigns the next permanent number and scaffolds the required files with the TypeScript/Vitest runner by default.
- The scaffold contains a description stub, a pending Vitest test, and starter and solution files ready to fill in.
- The CLI works from this repository directory, where the problem library lives.
