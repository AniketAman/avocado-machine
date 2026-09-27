import {expect, test} from 'vitest';
import {alienOrder} from './solution';

const cases = [
  {
    "args": [
      [
        "aba",
        "a"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "b",
        "c",
        "b"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "c",
        "d"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "de",
        "ded",
        "ed"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "efe",
        "e"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "f",
        "g",
        "f"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "g",
        "h"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "hi",
        "hih",
        "ih"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "iji",
        "i"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "j",
        "k",
        "j"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "k",
        "l"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "lm",
        "lml",
        "ml"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "mnm",
        "m"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "n",
        "o",
        "n"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "o",
        "p"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "pq",
        "pqp",
        "qp"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "qrq",
        "q"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "r",
        "s",
        "r"
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        "s",
        "t"
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        "tu",
        "tut",
        "ut"
      ]
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const order = alienOrder(args[0]);
    if (!expected) expect(order).toBe('');
    else { const chars = [...new Set(args[0].join(''))]; expect(order.length).toBe(chars.length); expect(new Set(order).size).toBe(chars.length); expect(chars.every(c => order.includes(c))).toBe(true); const rank = new Map([...order].map((c, j) => [c, j])); for (let j = 0; j + 1 < args[0].length; j++) { const a = args[0][j], b = args[0][j + 1]; let k = 0; while (k < a.length && k < b.length && a[k] === b[k]) k++; if (k < a.length && k < b.length) expect(rank.get(a[k])!).toBeLessThan(rank.get(b[k])!); else expect(a.length).toBeLessThanOrEqual(b.length); } }
});
