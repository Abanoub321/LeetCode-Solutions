import minimumTotal from "./MinimumTotal";

describe('Triangle', () => {
    it('pass test case 1', () => {
        expect(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])).toBe(11);
    })
    it('pass test case 2', () => {
        expect(minimumTotal([[-10]])).toBe(-10);
    })
})