export function topKFrequent(nums: number[], k: number): number[] {
  const numToFreq: Record<number, number> = {};
  for (let num of nums) {
    numToFreq[num] = numToFreq[num] || 0;
    numToFreq[num]++;
  }

  const buckets: number[][] = new Array(nums.length + 1).fill(null).map(() => []);
  for (let num in numToFreq) {
    const freq = numToFreq[num];
    buckets[freq].push(+num);
  }

  const out = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    out.push(...buckets[i].slice(0, k - out.length));
    if (k === out.length) break;
  }

  return out;
}
