import {expect, test} from 'vitest';
import {Codec} from './solution';

const cases = [
  {
    "args": [
      []
    ],
    "expected": [],
    "name": "baseline: [[]]"
  },
  {
    "name": "empty fields and delimiter-like text survive round trip",
    "args": [
      [
        "",
        "a#b",
        "12#",
        "\n",
        ""
      ]
    ],
    "expected": [
      "",
      "a#b",
      "12#",
      "\n",
      ""
    ]
  },
  {
    "name": "length prefix grows to two digits",
    "args": [
      [
        "abcdefghij",
        "x"
      ]
    ],
    "expected": [
      "abcdefghij",
      "x"
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    const codec = new Codec();
    expect(codec.decode(codec.encode(args[0]))).toEqual(expected);
});

test('encoded data can be decoded by a different Codec instance', () => {
    const input = ['', 'a#b', '12#', '\n', ''];
    const encoded = new Codec().encode(input);
    expect(new Codec().decode(encoded)).toEqual(input);
    expect(new Codec().encode([])).not.toBe(new Codec().encode(['']));
});
