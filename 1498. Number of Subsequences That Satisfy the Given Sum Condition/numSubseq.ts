function numSubseq(nums: number[], target: number): number {
    let result = 0;
    const mod = 10 ** 9 + 7;

    const sortedNums = nums.sort((a, b) => a - b);
    const power = new Array(sortedNums.length);

    for (let i = 0; i < sortedNums.length; i++) {
        power[i] = i === 0 ? 1 : (power[i - 1] * 2) % mod;
    }

    let j = sortedNums.length - 1;
    for (let i = 0; i < sortedNums.length; i++) {
        while (i <= j && sortedNums[i] + sortedNums[j] > target) {
            j--;
        }
        if (j >= i) {
            result = (result + power[j - i]) % mod;
        }
    }

    return result;
};

export default numSubseq;