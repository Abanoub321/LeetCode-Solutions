function minOperations(nums: number[], x: number): number {
    let target = -x;
    nums.forEach(num => target += num);
    if (target === 0) return nums.length;
    let map: { [key: number]: number } = {};
    map[0] = -1;
    let sum = 0;
    let res = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - target] !== undefined) {
            res = Math.max(res, i - map[sum - target]);
        }
        map[sum] = i;
    }
    return res == Number.MIN_VALUE ? -1 : nums.length - res;
};

export default minOperations;