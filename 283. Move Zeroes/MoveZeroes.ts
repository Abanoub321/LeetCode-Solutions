function moveZeroes(nums: number[]): void {
    let ball = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            ball++;
        } else if (ball > 0) {
            [nums[i - ball], nums[i]] = [nums[i], nums[i - ball]];
        }
    }
};

export default moveZeroes;