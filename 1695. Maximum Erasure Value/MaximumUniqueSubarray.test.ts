import maximumUniqueSubarray from "./MaximumUniqueSubarray";

describe('Maximum Erasure Value', () => {
    it('pass test 1', () => {
        expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toBe(17);
    })
    it('pass test 2', () => {
        expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8);
    })
})