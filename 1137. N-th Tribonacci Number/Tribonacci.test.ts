import tribonacci from "./Tribonacci";

describe('N-th Tribonacci', () => {
    it('should pass test 1', () => {
        expect(tribonacci(4)).toBe(4);
    })
    it('should pass test 2', () => {
        expect(tribonacci(25)).toBe(1389537);
    })
})