export function groupAnagrams(strs: string[]): string[][] {
  const groups: Record<string, string[]> = {};
  const aCharCode = "a".charCodeAt(0);
  for (let s of strs) {
    const freq = new Array(26).fill(0);
    for (let c of s) {
      const cIdx = c.charCodeAt(0) - aCharCode;
      freq[cIdx]++;
    }
    const key = freq.join(",");
    groups[key] = groups[key] || [];
    groups[key].push(s);
  }
  return Object.values(groups);
}
