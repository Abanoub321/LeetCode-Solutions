import minOperations from "./MinOperations";



describe('Minimum operations to reduce X to Zero', () => {
    it('pass test 1', () => {
        expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2);
    })
    it('pass test 2', () => {
        expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1);
    })
    it('pass test 3', () => {
        expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5);
    })
})