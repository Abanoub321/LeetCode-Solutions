function maxProduct(nums: number[]): number {
    let currMax = nums[0];
    let currMin = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
        currMin = Math.min(nums[i], nums[i] * currMax, nums[i] * currMin)
        currMax = temp;
        max = Math.max(currMax, max);
    }
    return max;
};

export default maxProduct;