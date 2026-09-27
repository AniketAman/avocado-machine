# Encode and Decode Strings

**Topic:** Arrays & Hashing · **Difficulty:** Medium

Create a lossless encoding for a list of strings and a decoder that recovers the exact list.

## TypeScript interface

`class Codec { encode(strs: string[]): string; decode(data: string): string[] }`

## Example

`["Hello", "World"] → encode → decode → ["Hello", "World"]`

## Rules

Strings may be empty and may contain any ASCII character. An empty list differs from a one-element list containing an empty string.

Source: [NeetCode problem](https://neetcode.io/problems/string-encode-and-decode/)
