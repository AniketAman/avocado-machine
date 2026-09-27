import {expect, test} from 'vitest';
import {kthSmallest} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      [
        5,
        3,
        8,
        1,
        4,
        7,
        9
      ],
      1
    ],
    "expected": 1
  },
  {
    "args": [
      [
        15,
        13,
        18,
        11,
        14,
        17,
        19
      ],
      2
    ],
    "expected": 13
  },
  {
    "args": [
      [
        25,
        23,
        28,
        21,
        24,
        27,
        29
      ],
      3
    ],
    "expected": 24
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
      ],
      4
    ],
    "expected": 35
  },
  {
    "args": [
      [
        45,
        43,
        48,
        41,
        44,
        47,
        49
      ],
      5
    ],
    "expected": 47
  },
  {
    "args": [
      [
        55,
        53,
        58,
        51,
        54,
        57,
        59
      ],
      6
    ],
    "expected": 58
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
      ],
      7
    ],
    "expected": 69
  },
  {
    "args": [
      [
        75,
        73,
        78,
        71,
        74,
        77,
        79
      ],
      1
    ],
    "expected": 71
  },
  {
    "args": [
      [
        85,
        83,
        88,
        81,
        84,
        87,
        89
      ],
      2
    ],
    "expected": 83
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
      ],
      3
    ],
    "expected": 94
  },
  {
    "args": [
      [
        105,
        103,
        108,
        101,
        104,
        107,
        109
      ],
      4
    ],
    "expected": 105
  },
  {
    "args": [
      [
        115,
        113,
        118,
        111,
        114,
        117,
        119
      ],
      5
    ],
    "expected": 117
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
      ],
      6
    ],
    "expected": 128
  },
  {
    "args": [
      [
        135,
        133,
        138,
        131,
        134,
        137,
        139
      ],
      7
    ],
    "expected": 139
  },
  {
    "args": [
      [
        145,
        143,
        148,
        141,
        144,
        147,
        149
      ],
      1
    ],
    "expected": 141
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
      ],
      2
    ],
    "expected": 153
  },
  {
    "args": [
      [
        165,
        163,
        168,
        161,
        164,
        167,
        169
      ],
      3
    ],
    "expected": 164
  },
  {
    "args": [
      [
        175,
        173,
        178,
        171,
        174,
        177,
        179
      ],
      4
    ],
    "expected": 175
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
      ],
      5
    ],
    "expected": 187
  },
  {
    "args": [
      [
        195,
        193,
        198,
        191,
        194,
        197,
        199
      ],
      6
    ],
    "expected": 198
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(kthSmallest(treeFrom(args[0]), args[1])).toBe(expected);
});
