function numSubseq(nums: number[], target: number): number {
    let result = 0;
    const mod = 10 ** 9 + 7;
    
    const sortedNums = nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (sortedNums[i] + sortedNums[j] > target) {
            j--;
        } else {
            result = (result + 2 ** (j - i)) % mod;
            i++;
        }
    }

    return result;
};

export default numSubseq;