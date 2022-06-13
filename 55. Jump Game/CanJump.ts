function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true;
    if (nums[0] === 0) return false;
    let dp: number[] = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        if (dp[i - 1] < i)
            return false;
        dp[i] = Math.max(dp[i - 1], nums[i] + i);
    }
    dp[nums.length - 1] = dp[nums.length - 2];
    return dp[nums.length - 1] >= nums.length - 1;
};

export default canJump;