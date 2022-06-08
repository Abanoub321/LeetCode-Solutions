import removePalindromeSub from "./RemovePalindromicSubsequences";

describe('Remove Palindromic Subsequences', () => {
    it('pass test 1', () => {
        const s = "ababa";
        const result = removePalindromeSub(s);
        expect(result).toEqual(1);
    })
    it('pass test 2', () => {
        const s = "abb";
        const result = removePalindromeSub(s);
        expect(result).toEqual(2);
    })
    it('pass test 3', () => {
        const s = "baabb";
        const result = removePalindromeSub(s);
        expect(result).toEqual(2);
    })
})