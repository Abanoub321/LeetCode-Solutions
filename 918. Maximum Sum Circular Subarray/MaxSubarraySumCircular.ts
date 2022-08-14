function maxSubarraySumCircular(nums: number[]): number {
    let currMax ,currMin,maxSum,minSum,sum;
    currMax = currMin = maxSum = minSum = sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        sum += nums[i];
        currMax = Math.max(currMax + nums[i], nums[i]);
        currMin = Math.min(currMin + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currMax);
        minSum = Math.min(minSum, currMin);
    }
    return minSum === sum ? maxSum : Math.max(maxSum, sum - minSum);
};

export default maxSubarraySumCircular;