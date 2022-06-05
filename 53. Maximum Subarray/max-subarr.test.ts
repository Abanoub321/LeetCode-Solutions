import maxSubArray from './MaxSubArray';

describe('O(n) Solution', () => {
    it('should pass test 1 ', () => {
        const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(maxSubArray(nums)).toBe(6);
    })
    it('should pass test 2', () => {
        const nums = [1];
        expect(maxSubArray(nums)).toBe(1);
    })
    it('should pass test 3', () => {
        const nums = [5,4,-1,7,8];
        expect(maxSubArray(nums)).toBe(23);
    })
    it('should pass if only one number negative',()=> {
        const nums = [-1];
        expect(maxSubArray(nums)).toBe(-1);
    })
    it('should pass if all numbers negative',()=> {
        const nums = [-2,-1];
        expect(maxSubArray(nums)).toBe(-1);
    });
})