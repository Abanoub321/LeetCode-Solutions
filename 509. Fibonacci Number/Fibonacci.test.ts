import fib from "./Fibonacci";

describe('Fibonacci', () => {
    it('should pass test 1', () => {
        expect(fib(2)).toBe(1);
    })
    it('should pass test 2', () => {
        expect(fib(3)).toBe(2);
    })
    it('should pass test 3', () => {
        expect(fib(4)).toBe(3);
    })
})