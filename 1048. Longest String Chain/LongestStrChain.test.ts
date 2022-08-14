import longestStrChain from "./LongestStrChain";


describe('Longest String Chain', () => {
    it('pass test case 1', () => {
        expect(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"])).toBe(4);
    })
    it('pass test case 2', () => {
        expect(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])).toBe(5);
    })
    it('pass test case 3', () => {
        expect(longestStrChain(["abcd", "dbqca"])).toBe(1);
    })
})