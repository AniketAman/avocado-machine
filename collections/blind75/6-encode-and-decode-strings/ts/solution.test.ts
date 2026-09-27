import {expect, test} from 'vitest';
import {Codec} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": []
  },
  {
    "args": [
      [
        ""
      ]
    ],
    "expected": [
      ""
    ]
  },
  {
    "args": [
      [
        "item2",
        "",
        "##",
        "2#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item2",
      "",
      "##",
      "2#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item3",
        "",
        "###",
        "3#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item3",
      "",
      "###",
      "3#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item4",
        "",
        "####",
        "4#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item4",
      "",
      "####",
      "4#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item5",
        "",
        "#####",
        "5#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item5",
      "",
      "#####",
      "5#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item6",
        "",
        "######",
        "6#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item6",
      "",
      "######",
      "6#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item7",
        "",
        "#######",
        "7#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item7",
      "",
      "#######",
      "7#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item8",
        "",
        "########",
        "8#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item8",
      "",
      "########",
      "8#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item9",
        "",
        "#########",
        "9#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item9",
      "",
      "#########",
      "9#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item10",
        "",
        "##########",
        "10#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item10",
      "",
      "##########",
      "10#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item11",
        "",
        "###########",
        "11#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item11",
      "",
      "###########",
      "11#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item12",
        "",
        "############",
        "12#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item12",
      "",
      "############",
      "12#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item13",
        "",
        "#############",
        "13#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item13",
      "",
      "#############",
      "13#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item14",
        "",
        "##############",
        "14#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item14",
      "",
      "##############",
      "14#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item15",
        "",
        "###############",
        "15#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item15",
      "",
      "###############",
      "15#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item16",
        "",
        "################",
        "16#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item16",
      "",
      "################",
      "16#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item17",
        "",
        "#################",
        "17#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item17",
      "",
      "#################",
      "17#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item18",
        "",
        "##################",
        "18#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item18",
      "",
      "##################",
      "18#x",
      "a\nb"
    ]
  },
  {
    "args": [
      [
        "item19",
        "",
        "###################",
        "19#x",
        "a\nb"
      ]
    ],
    "expected": [
      "item19",
      "",
      "###################",
      "19#x",
      "a\nb"
    ]
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    const codec = new Codec();
    expect(codec.decode(codec.encode(args[0]))).toEqual(expected);
});
