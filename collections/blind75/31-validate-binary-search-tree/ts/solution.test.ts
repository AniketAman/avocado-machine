import {expect, test} from 'vitest';
import {isValidBST} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        5,
        1,
        7,
        null,
        null,
        3,
        8
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        11,
        21,
        31
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        12,
        7,
        22,
        null,
        null,
        14,
        27
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        35,
        33,
        38,
        31,
        34,
        37,
        39
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        14,
        24,
        34
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        15,
        10,
        25,
        null,
        null,
        17,
        30
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        65,
        63,
        68,
        61,
        64,
        67,
        69
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        17,
        27,
        37
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        18,
        13,
        28,
        null,
        null,
        20,
        33
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        95,
        93,
        98,
        91,
        94,
        97,
        99
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        20,
        30,
        40
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        21,
        16,
        31,
        null,
        null,
        23,
        36
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        125,
        123,
        128,
        121,
        124,
        127,
        129
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        23,
        33,
        43
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        24,
        19,
        34,
        null,
        null,
        26,
        39
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        155,
        153,
        158,
        151,
        154,
        157,
        159
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        26,
        36,
        46
      ]
    ],
    "expected": false
  },
  {
    "args": [
      [
        27,
        22,
        37,
        null,
        null,
        29,
        42
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        185,
        183,
        188,
        181,
        184,
        187,
        189
      ]
    ],
    "expected": true
  },
  {
    "args": [
      [
        29,
        39,
        49
      ]
    ],
    "expected": false
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(isValidBST(treeFrom(args[0]))).toEqual(expected);
});
