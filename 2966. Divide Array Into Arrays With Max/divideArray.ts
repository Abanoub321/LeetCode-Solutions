function divideArray(nums: number[], k: number): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 2; i < nums.length; i += 3) {
    if (nums[i] - nums[i - 2] <= k) {
      result.push(nums.slice(i - 2, i + 1));
    } else {
      return [];
    }
  }
  return result;
}

export default divideArray;
