import {expect, test} from 'vitest';
import {combinationSum} from './solution';
const normalize = (value: number[][] | string[][]) => value.map(group => [...group].sort()).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
const cases = [
  {
    "args": [
      [
        2,
        5,
        9
      ],
      5
    ],
    "expected": [
      [
        5
      ]
    ],
    "name": "baseline: [[2,5,9],5]"
  },
  {
    "name": "one candidate can be reused",
    "args": [
      [
        2,
        3,
        6,
        7
      ],
      7
    ],
    "expected": [
      [
        2,
        2,
        3
      ],
      [
        7
      ]
    ]
  },
  {
    "name": "unreachable target has no combinations",
    "args": [
      [
        4,
        6
      ],
      7
    ],
    "expected": []
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(combinationSum(...(args as any)) as any)).toEqual(normalize(expected as any));
});
