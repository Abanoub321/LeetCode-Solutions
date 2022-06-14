function jump(nums: number[]): number {
    let maxReach = 0;
    let steps = 0;
    let curEnd = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (i == curEnd) {
            steps++;
            curEnd = maxReach;
        }
    }

    return steps;
};

export default jump;