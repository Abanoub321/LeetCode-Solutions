
/**
  nums = [3,5,6,7], target = 9
  [3]
  [3, 5]
    [3, 5, 6]
    [3,  6]

    result will be 4 as there are 4 subsequence that satisfy the condition
    get the number of subsequence that satisfy the condition
 */
function numSubseq(nums: number[], target: number): number {
    let result = 0;
    const mod = 10 ** 9 + 7;
    
    const sortedNums = nums.sort((a, b) => a - b);

    for(let i = 0; i < sortedNums.length; i++) {
        let j = 0;

        while(j < sortedNums.length && sortedNums[i] + sortedNums[j] <= target) {
            j++;
        }

        if(j > i) {
            result += (2 ** (j - i - 1)) % mod;
            result %= mod;
        }
    }

    return result;
};

export default numSubseq;