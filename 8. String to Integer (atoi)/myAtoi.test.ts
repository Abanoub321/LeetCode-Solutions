import myAtoi from "./myAtoi";

describe('String to Integer (atoi)', () => {
    it('pass test 1', () => {
        expect(myAtoi('42')).toEqual(42);
    })
    it('pass test 2', () => {
        expect(myAtoi('   -42')).toEqual(-42);
    })
    it('pass test 3', () => {
        expect(myAtoi('4193 with words')).toEqual(4193);
    })
    it('pass test 4', () => {
        expect(myAtoi('words and 987')).toEqual(0);
    })
})