function maximumUniqueSubarray(nums: number[]): number {
    let max = 0;
    let sum = 0;
    let i = 0;
    let j = 0;
    let set: Set<number> = new Set();
    while (i < nums.length && j < nums.length) {
        if (set.has(nums[j])) {
            sum -= nums[i];
            set.delete(nums[i]);
            i++;
        } else {
            set.add(nums[j]);
            sum += nums[j];
            max = Math.max(max, sum);
            j++;
        }
    }
    return max;
};

export default maximumUniqueSubarray;