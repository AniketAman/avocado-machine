import {expect, test} from 'vitest';
import {wordBreak} from './solution';

const cases = [
  {
    "args": [
      "ab",
      [
        "a",
        "ab",
        "b",
        "ba"
      ]
    ],
    "expected": true,
    "name": "baseline: [\"ab\",[\"a\",\"ab\",\"b\",\"ba\"]]"
  },
  {
    "name": "prefix match must continue to end",
    "args": [
      "catsandog",
      [
        "cats",
        "dog",
        "sand",
        "and",
        "cat"
      ]
    ],
    "expected": false
  },
  {
    "name": "multiple word boundaries form valid split",
    "args": [
      "leetcode",
      [
        "leet",
        "code"
      ]
    ],
    "expected": true
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(wordBreak(...(args as any))).toEqual(expected);
});
