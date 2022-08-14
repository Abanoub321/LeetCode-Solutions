import convert from "./Convert";

describe('Zigzag conversion', () => {
    it('pass test case 1', () => {
        expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    })
    it('pass test case 2', () => {
        expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    })
    it('pass test case 3', () => {
        expect(convert('A', 1)).toBe('A');
    })
})