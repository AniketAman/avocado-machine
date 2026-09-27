# Kata Machine

A personal practice system that organizes coding exercises and schedules repeat attempts.

## Language

**Collection**:
A named group of problems that can be practiced together, such as DSA or JavaScript.

**Problem**:
One coding exercise within a collection, with a shared description and one or more language variants.
_Avoid_: Kata

**Problem number**:
A permanent numeric identifier for a problem within its collection. The collection and number together identify one problem.

**Language variant**:
A version of a problem practiced in one programming language, with its own tests, starter template, solution file, and review schedule.

**Starter template**:
The starting code copied into a problem's solution file when the problem is selected for practice.
_Avoid_: Reference solution

**Solution file**:
The working code for the selected problem. Its previous contents are saved before a new attempt begins.

**Review**:
A repeat attempt on a previously practiced language variant that is due according to its spaced repetition schedule.

**Due review**:
A review whose scheduled date has arrived or passed.

**New problem**:
A language variant that has not yet received a recall grade.

**Recall grade**:
The learner's rating of how well they recalled a solution in one language. It determines that language variant's next review date.

**Practice metadata**:
The scheduling record for a language variant, including the information needed to determine its next review.

**Solution archive**:
A saved copy of a problem's solution file from before a new practice attempt.
