import {expect, test} from 'vitest';
import {topKFrequent} from './solution';
const normalize = (value: number[]) => [...value].sort((a, b) => a - b);
const cases = [
  {
    "args": [
      [
        100,
        100,
        100,
        100,
        100,
        -1,
        -1,
        -1,
        0,
        200
      ],
      1
    ],
    "expected": [
      100
    ],
    "name": "baseline: [[100,100,100,100,100,-1,-1,-1,0,200],1]"
  },
  {
    "name": "negative values and a frequency tie",
    "args": [
      [
        -1,
        -1,
        2,
        2,
        2,
        3
      ],
      2
    ],
    "expected": [
      2,
      -1
    ]
  },
  {
    "name": "one distinct value despite many copies",
    "args": [
      [
        4,
        4,
        4
      ],
      1
    ],
    "expected": [
      4
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(topKFrequent(...(args as any)) as any)).toEqual(normalize(expected as any));
});
