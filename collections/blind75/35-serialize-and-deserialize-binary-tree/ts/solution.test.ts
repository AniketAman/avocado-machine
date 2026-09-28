import {expect, test} from 'vitest';
import {Codec} from './solution';
import {treeFrom, treeToArray} from '../../support';

const cases = [
  {
    "args": [
      []
    ],
    "expected": [],
    "name": "baseline: [[]]"
  },
  {
    "name": "round trip preserves missing left child",
    "args": [
      [
        1,
        null,
        2,
        3
      ]
    ],
    "expected": [
      1,
      null,
      2,
      3
    ]
  },
  {
    "name": "round trip preserves negative values and shape",
    "args": [
      [
        -1,
        0,
        2,
        null,
        3
      ]
    ],
    "expected": [
      -1,
      0,
      2,
      null,
      3
    ]
  }
];

test.each(cases)('$name', ({args, expected}) => {
    const codec = new Codec();
    expect(treeToArray(codec.deserialize(codec.serialize(treeFrom(args[0]))))).toEqual(expected);
});

test('serialized data reconstructs the tree in another Codec instance', () => {
    const original = treeFrom([1, null, -2, 3]);
    const encoded = new Codec().serialize(original);
    const decoded = new Codec().deserialize(encoded);
    expect(treeToArray(decoded)).toEqual([1, null, -2, 3]);
    expect(decoded).not.toBe(original);
});
