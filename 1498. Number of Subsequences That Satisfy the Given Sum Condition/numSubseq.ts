function numSubseq(nums: number[], target: number): number {
    let result = 0;
    const mod = 10 ** 9 + 7;

    const sortedNums = nums.sort((a, b) => a - b);

    let j = sortedNums.length - 1;
    for (let i = 0; i < sortedNums.length; i++) {
        while (i <= j && sortedNums[i] + sortedNums[j] > target) {
            j--;
        }
        if (j >= i) {
            result = (result + power(2, j - i, mod)) % mod;
        }
    }

    return result;
};

const power = (base: number, exponent: number, mod: number): number => {
    return exponent === 0 ? 1 : (base * power(base, exponent - 1, mod)) % mod;
}

export default numSubseq;