import {expect, test} from 'vitest';
import {lowestCommonAncestor} from './solution';
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
      1,
      8
    ],
    "expected": 5
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
      13,
      14
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
      21,
      24
    ],
    "expected": 23
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
      33,
      38
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
      41,
      44
    ],
    "expected": 43
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
      53,
      54
    ],
    "expected": 53
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
      61,
      68
    ],
    "expected": 65
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
      73,
      74
    ],
    "expected": 73
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
      81,
      84
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
      93,
      98
    ],
    "expected": 95
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
      101,
      104
    ],
    "expected": 103
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
      113,
      114
    ],
    "expected": 113
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
      121,
      128
    ],
    "expected": 125
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
      133,
      134
    ],
    "expected": 133
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
      141,
      144
    ],
    "expected": 143
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
      153,
      158
    ],
    "expected": 155
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
      161,
      164
    ],
    "expected": 163
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
      173,
      174
    ],
    "expected": 173
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
      181,
      188
    ],
    "expected": 185
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
      193,
      194
    ],
    "expected": 193
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const root = treeFrom(args[0]);
    const find = (node: any, value: number): any => !node ? null : node.val === value ? node : find(node.left, value) ?? find(node.right, value);
    expect(lowestCommonAncestor(root, find(root, args[1]), find(root, args[2]))?.val).toBe(expected);
});
