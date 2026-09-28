import {expect, test} from 'vitest';
import {merge} from './solution';
const normalize = (value: number[][]) => [...value].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
const cases = [
  {
    "args": [
      [
        [
          0,
          2
        ]
      ]
    ],
    "expected": [
      [
        0,
        2
      ]
    ],
    "name": "baseline: [[[0,2]]]"
  },
  {
    "name": "touching intervals merge",
    "args": [
      [
        [
          1,
          3
        ],
        [
          3,
          5
        ]
      ]
    ],
    "expected": [
      [
        1,
        5
      ]
    ]
  },
  {
    "name": "nested interval does not shorten outer interval",
    "args": [
      [
        [
          1,
          10
        ],
        [
          2,
          3
        ],
        [
          4,
          8
        ]
      ]
    ],
    "expected": [
      [
        1,
        10
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(merge(...(args as any)) as any)).toEqual(normalize(expected as any));
});
