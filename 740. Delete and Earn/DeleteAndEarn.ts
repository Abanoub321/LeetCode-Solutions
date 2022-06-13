function deleteAndEarn(nums: number[]): number {
    let sum: number[] = [];
    nums.forEach(num => {
        sum[num] = (sum[num] || 0) + num;
    })
    let take = 0, skip = 0;
    for (let i = 0; i < sum.length; i++) {
        let takei = skip + (sum[i] === undefined ? 0 : sum[i]);
        let skipi = Math.max(skip, take);
        take = takei;
        skip = skipi;
    }
    return Math.max(take, skip);
};



export default deleteAndEarn;