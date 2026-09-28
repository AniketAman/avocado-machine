import {expect, test} from 'vitest';
import {findWords} from './solution';
const normalize = (value: string[]) => [...value].sort();
const cases = [
  {
    "args": [
      [
        [
          "a",
          "b",
          "c"
        ],
        [
          "d",
          "a",
          "f"
        ]
      ],
      [
        "ab",
        "abc",
        "ad",
        "aba",
        "aaf"
      ]
    ],
    "expected": [
      "ab",
      "abc",
      "ad",
      "aba"
    ],
    "name": "baseline: [[[\"a\",\"b\",\"c\"],[\"d\",\"a\",\"f\"]],[\"ab\",\"abc\",\"ad\",\"aba\",\"aaf\"]]"
  },
  {
    "name": "deduplicates a candidate found by multiple paths",
    "args": [
      [
        [
          "a",
          "a"
        ],
        [
          "a",
          "a"
        ]
      ],
      [
        "aa",
        "aaa",
        "aaaa",
        "aaaaa"
      ]
    ],
    "expected": [
      "aa",
      "aaa",
      "aaaa"
    ]
  },
  {
    "name": "cannot reuse cells and preserves valid prefix word",
    "args": [
      [
        [
          "a",
          "b"
        ],
        [
          "c",
          "d"
        ]
      ],
      [
        "ab",
        "aba",
        "ac"
      ]
    ],
    "expected": [
      "ab",
      "ac"
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(findWords(...(args as any)) as any)).toEqual(normalize(expected as any));
});
