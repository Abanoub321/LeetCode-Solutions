import reverse from "./Reverse";

describe('Reverse Integer', () => {
    it('pass test case 1', () => {
        expect(reverse(123)).toBe(321);
    })
    it('pass test case 2', () => {
        expect(reverse(-123)).toBe(-321);
    })
    it('pass test case 3', () => {
        expect(reverse(120)).toBe(21);
    })
})