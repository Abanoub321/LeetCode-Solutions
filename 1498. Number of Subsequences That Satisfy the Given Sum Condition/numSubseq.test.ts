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
})
