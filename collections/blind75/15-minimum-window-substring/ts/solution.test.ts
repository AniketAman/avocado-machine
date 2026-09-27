import {expect, test} from 'vitest';
import {minWindow} from './solution';

const cases = [
  {
    "args": [
      "x",
      "xy"
    ],
    "expected": ""
  },
  {
    "args": [
      "axbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxbxxc",
      "ac"
    ],
    "expected": "axxbxxc"
  },
  {
    "args": [
      "axxxbc",
      "abc"
    ],
    "expected": "axxxbc"
  },
  {
    "args": [
      "axxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxxxxbxxc",
      "ac"
    ],
    "expected": "axxxxxbxxc"
  },
  {
    "args": [
      "axxxxxxbc",
      "abc"
    ],
    "expected": "axxxxxxbc"
  },
  {
    "args": [
      "axxxxxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxxxxxxxbxxc",
      "ac"
    ],
    "expected": "axxxxxxxxbxxc"
  },
  {
    "args": [
      "axxxxxxxxxbc",
      "abc"
    ],
    "expected": "axxxxxxxxxbc"
  },
  {
    "args": [
      "axxxxxxxxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxxxxxxxxxxbxxc",
      "ac"
    ],
    "expected": "axxxxxxxxxxxbxxc"
  },
  {
    "args": [
      "axxxxxxxxxxxxbc",
      "abc"
    ],
    "expected": "axxxxxxxxxxxxbc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxbxxc",
      "ac"
    ],
    "expected": "axxxxxxxxxxxxxxbxxc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxxbc",
      "abc"
    ],
    "expected": "axxxxxxxxxxxxxxxbc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxxxxbxxc",
      "ac"
    ],
    "expected": "axxxxxxxxxxxxxxxxxbxxc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxxxxxbc",
      "abc"
    ],
    "expected": "axxxxxxxxxxxxxxxxxxbc"
  },
  {
    "args": [
      "axxxxxxxxxxxxxxxxxxxbxc",
      "bc"
    ],
    "expected": "bxc"
  }
];

test.each(cases)('case %#', ({args, expected}) => {
    expect(minWindow(...(args as any))).toEqual(expected);
});
