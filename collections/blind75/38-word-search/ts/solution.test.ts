import {expect, test} from 'vitest';
import {exist} from './solution';

const cases = [
  {
    "args": [
      [
        [
          "A"
        ]
      ],
      "A"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A"
        ]
      ],
      "B"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "C",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "D",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "E",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "F",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "G",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "H",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "I",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "J",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "K",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "L",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "M",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "N",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "O",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "P",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "Q",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "R",
          "F"
        ]
      ],
      "ABA"
    ],
    "expected": false
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "S",
          "F"
        ]
      ],
      "ABC"
    ],
    "expected": true
  },
  {
    "args": [
      [
        [
          "A",
          "B",
          "C"
        ],
        [
          "D",
          "T",
          "F"
        ]
      ],
      "AD"
    ],
    "expected": true
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(exist(...(args as any))).toEqual(expected);
});
