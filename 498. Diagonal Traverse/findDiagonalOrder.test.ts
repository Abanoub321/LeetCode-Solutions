import findDiagonalOrder from "./findDiagonalOrder";

describe('findDiagonalOrder', () => {
    it('pass test 1', () => {
        expect(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
    })
    it('pass test 2', () => {
        expect(findDiagonalOrder([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    })
});