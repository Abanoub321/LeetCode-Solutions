import canConstruct from "./CanConstruct";

describe('Ransom Note', () => {
    it('pass test case 1', () => {
        expect(canConstruct('a', 'b')).toBe(false);
    })
    it('pass test case 2', () => {
        expect(canConstruct('aa', 'ab')).toBe(false);
    })
    it('pass test case 3', () => {
        expect(canConstruct('aa', 'aab')).toBe(true);
    })
})