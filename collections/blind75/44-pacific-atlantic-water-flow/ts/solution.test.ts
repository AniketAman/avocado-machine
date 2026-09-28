import {expect, test} from 'vitest';
import {pacificAtlantic} from './solution';
const normalize = (value: number[][]) => [...value].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
const cases = [
  {
    "args": [
      [
        [
          0
        ]
      ]
    ],
    "expected": [
      [
        0,
        0
      ]
    ],
    "name": "baseline: [[[0]]]"
  },
  {
    "name": "flat grid flows to both oceans",
    "args": [
      [
        [
          1,
          1
        ],
        [
          1,
          1
        ]
      ]
    ],
    "expected": [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ]
    ]
  },
  {
    "name": "one row reaches both oceans",
    "args": [
      [
        [
          1,
          2,
          3
        ]
      ]
    ],
    "expected": [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ]
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    expect(normalize(pacificAtlantic(...(args as any)) as any)).toEqual(normalize(expected as any));
});
