import deleteAndEarn from "./DeleteAndEarn";

describe('Delete and Earn', () => {
    it('pass test case 1', () => {
        expect(deleteAndEarn([3, 4, 2])).toBe(6);
    })
    it('pass test case 2', () => {
        expect(deleteAndEarn([2, 2, 3, 3, 3, 4])).toBe(9);
    })
})