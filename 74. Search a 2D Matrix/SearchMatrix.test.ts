import searchMatrix from "./SearchMatrix";

describe('Search a 2D Matrix', () => {
    it('pass test case 1', () => {
        const input = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        const target = 3;
        const expected = true;
        expect(searchMatrix(input, target)).toEqual(expected);
    });
    it('pass test case 2', () => {
        const input = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        const target = 13;
        const expected = false;
        expect(searchMatrix(input, target)).toEqual(expected);
    })
})