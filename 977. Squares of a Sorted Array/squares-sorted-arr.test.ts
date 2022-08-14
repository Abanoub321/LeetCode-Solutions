import sortedSquares from "./SortedSquares";

describe('Squares of a Sorted Array', () => {
    it('should pass test 1', () => {
        const input = [ -4, -1, 0, 3, 10 ];
        const output = [ 0, 1, 9, 16, 100 ];
        expect(sortedSquares(input)).toEqual(output);
    })
    it('should pass test 2', () => {
        const input = [ -7, -3, 2, 3, 11 ];
        const output = [ 4, 9, 9, 49, 121 ];
        expect(sortedSquares(input)).toEqual(output);
    })
})