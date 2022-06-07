import moveZeroes from "./MoveZeroes";

describe('Move Zeroes', () => {
    it('pass test 1', () => {
        const input = [0, 1, 0, 3, 12];
        const result = [1, 3, 12, 0, 0];
        moveZeroes(input);
        expect(input).toEqual(result);
    })
    it('pass test 2', () => {
        const input = [0];
        const result = [0];
        moveZeroes(input);
        expect(input).toEqual(result);
    })
})