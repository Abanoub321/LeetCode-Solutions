import numSubseq from "./numSubseq";

describe('Number of Subsequences That Satisfy the Given Sum Condition', () => {
    it('pass test 1', () => {
        expect(numSubseq([3, 5, 6, 7], 9)).toBe(4);
    });

    it('pass test 2', () => {
        expect(numSubseq([3, 3, 6, 8], 10)).toBe(6);
    });

    it('pass test 3', () => {
        expect(numSubseq([2, 3, 3, 4, 6, 7], 12)).toBe(61);
    });

    it('pass test 4', () => {
        expect(numSubseq([9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16, 19, 12, 13, 15, 28, 14, 12, 24, 9, 6, 7, 2, 15, 19, 13, 30, 30, 23, 19, 11, 3, 17, 2, 14, 20, 22, 30, 12, 1, 11, 2, 2, 20, 20, 27, 15, 9, 10, 4, 12, 30, 13, 5, 2, 11, 29, 5, 3, 13, 22, 5, 16, 19, 7, 19, 11, 16, 11, 25, 29, 21, 29, 3, 2, 9, 20, 15, 9], 32)).toBe(91931447);
    });
})
