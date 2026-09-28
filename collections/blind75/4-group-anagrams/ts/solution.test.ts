import {expect, test} from 'vitest';
import {groupAnagrams} from './solution';
const normalize = (value: number[][] | string[][]) => value.map(group => [...group].sort()).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
const cases = [
  {
    "args": [
      [
        "a",
        "",
        "",
        ""
      ]
    ],
    "expected": [
      [
        "a"
      ],
      [
        "",
        "",
        ""
      ]
    ],
    "name": "baseline: [[\"a\",\"\",\"\",\"\"]]"
  },
  {
    "name": "same letters with multiplicity form one group",
    "args": [
      [
        "abb",
        "bab",
        "bba",
        "ab"
      ]
    ],
    "expected": [
      [
        "abb",
        "bab",
        "bba"
      ],
      [
        "ab"
      ]
    ]
  },
  {
    "name": "empty strings group separately from single letters",
    "args": [
      [
        "",
        "a",
        "",
        "b"
      ]
    ],
    "expected": [
      [
        "",
        ""
      ],
      [
        "a"
      ],
      [
        "b"
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(groupAnagrams(...(args as any)) as any)).toEqual(normalize(expected as any));
});
