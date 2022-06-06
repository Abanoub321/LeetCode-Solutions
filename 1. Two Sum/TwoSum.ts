function twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        if (map[diff] !== undefined)
            return [map[diff], i];
        else
            map[num] = i;
    }
    return [];
};

export default twoSum;