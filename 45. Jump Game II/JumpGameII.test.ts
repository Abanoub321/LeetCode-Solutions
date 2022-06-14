import jump from "./Jump";

describe('Jump Game II', () => {
    it('pass test case 1', () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    })
    it('pass test case 2', () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    })
})