# Avocado Machine

A local code kata platform that organizes coding exercises and schedules repeat attempts.

## Language

**Collection**:
A named, ordered group of problem entries that can be practiced together, such as Blind 75 or Grind 75.

**Collection entry**:
A problem's place in one collection, with that collection's number and display title. Entries in different collections may refer to the same problem.

**Problem**:
A coding exercise with a shared description and one or more language variants. A problem can appear in multiple collections.
_Avoid_: Kata

**Problem number**:
A permanent numeric identifier for a collection entry. The collection and number together identify one entry.

**Language variant**:
A version of a problem practiced in one programming language, with its own tests, starter template, solution file, and review schedule.

**Starter template**:
The starting code for a new practice attempt in a language variant.
_Avoid_: Reference solution

**Solution file**:
The working code for a language variant's current attempt.

**Review**:
An opportunity to revisit a previously graded language variant when its spaced repetition schedule is due.

**Due review**:
A review whose scheduled date has arrived or passed.

**New problem**:
A language variant that has not yet received a recall grade.

**Recall grade**:
The learner's rating of how well they recalled a solution in one language. It determines that language variant's next review date.

**Practice metadata**:
The scheduling record for a language variant, including the information needed to determine its next review.

**Solution archive**:
A saved copy of a changed solution file from before a new practice attempt.

**Practice reset**:
The return of every language variant to a new problem state, with no recall history, a fresh solution file, and no solution archives.
