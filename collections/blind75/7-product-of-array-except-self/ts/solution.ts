export function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = [1];
  const suffix: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    suffix[i] = i === nums.length - 1 ? 1 : nums[i + 1] * suffix[i + 1];
  }

  return prefix.map((p, i) => p * suffix[i]);
}
