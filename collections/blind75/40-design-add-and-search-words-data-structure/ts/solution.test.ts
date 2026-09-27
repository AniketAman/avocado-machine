import {expect, test} from 'vitest';
import {WordDictionary} from './solution';

const cases = [
  {
    "args": [
      [
        "ab",
        "cb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abb",
        "cbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbb",
        "cbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbb",
        "cbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbb",
        "cbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbb",
        "cbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbb",
        "cbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbb",
        "cbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbb",
        "cbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbb",
        "cbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbb",
        "cbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbb",
        "cbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbb",
        "cbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  },
  {
    "args": [
      [
        "abbbbbbbbbbbbbbbbbbbb",
        "cbbbbbbbbbbbbbbbbbbbb"
      ]
    ],
    "expected": [
      true,
      true,
      false,
      true
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const dict = new WordDictionary();
    const [a, b] = args[0]; dict.addWord(a); dict.addWord(b);
    expect([dict.search(a), dict.search('.' + a.slice(1)), dict.search('z' + a.slice(1)), dict.search(a.slice(0, -1) + '.')]).toEqual(expected);
});
