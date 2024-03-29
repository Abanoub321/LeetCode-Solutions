function sortedSquares(nums: number[]): number[] {
    return nums.map(x => x * x).sort((a, b) => a - b);
};

export default sortedSquares;