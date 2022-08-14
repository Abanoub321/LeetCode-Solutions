import twoSum from "./TwoSum";

describe('Two sum', () => {
    it('should pass test 1', () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    })
    it('should pass test 2', () => {
        const result = twoSum([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    })
    it('should pass test 3', () => {
        const result = twoSum([3, 3], 6);
        expect(result).toEqual([0, 1]);
    })
})