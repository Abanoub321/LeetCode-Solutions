function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let dpFirst: number[] = [], dpSecond: number[] = [];

    dpFirst[0] = 0;
    dpFirst[1] = nums[0];
    dpSecond[0] = 0;
    dpSecond[1] = 0;

    for (let i = 2; i <= nums.length; i++) {
        dpFirst[i] = Math.max(dpFirst[i - 1], dpFirst[i - 2] + nums[i - 1]);
        dpSecond[i] = Math.max(dpSecond[i - 1], dpSecond[i - 2] + nums[i - 1]);
    }
    return Math.max(dpFirst[nums.length - 1], dpSecond[nums.length]);
};


export default rob;


