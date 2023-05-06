import makesquare from "./makesquare";

describe('473. Matchsticks to Square', () => {
    it('should pass test case 1', () => {
        expect(makesquare([1, 1, 2, 2, 2])).toBe(true);
    });

    it('should pass test case 2', () => {
        expect(makesquare([3, 3, 3, 3, 4])).toBe(false);
    });

    it('should pass test case 3 without timelimit', () => {
        let timelimit = 2000;
        let start = Date.now();
        expect(makesquare([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102]
        )).toBe(false);

        let end = Date.now();
        expect(end - start).toBeLessThan(timelimit);
    });
});