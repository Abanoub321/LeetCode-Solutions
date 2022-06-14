import maxSubarraySumCircular from "./MaxSubarraySumCircular";

describe('Maximum Sum Circular Subarray', () => {
    it('pass test case 1', () => {
        expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3);
    })
    it('pass test case 2', () => {
        expect(maxSubarraySumCircular([5, -3, 5])).toBe(10);
    })
    it('pass test case 3', () => {
        expect(maxSubarraySumCircular([-3, -2, -3])).toBe(-2);
    })
})