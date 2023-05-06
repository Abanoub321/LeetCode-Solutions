import makesquare from "./makesquare";

describe('473. Matchsticks to Square', () => {
    it('should pass test case 1', () => {
        expect(makesquare([1, 1, 2, 2, 2])).toBe(true);
    });

    it('should pass test case 2', () => {
        expect(makesquare([3, 3, 3, 3, 4])).toBe(false);
    });
});