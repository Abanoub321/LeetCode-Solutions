import generate from "./PascalTriangle";

describe('Pascal Triangle', () => {
    it('pass test 1', () => {
        expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    })
    it('pass test 2', () => {
        expect(generate(1)).toEqual([[1]]);
    })
})