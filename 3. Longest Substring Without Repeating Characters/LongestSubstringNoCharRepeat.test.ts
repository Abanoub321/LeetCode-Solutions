import lengthOfLongestSubstring from "./LongestSubstringNoCharRepeat";

describe('Longest Substring No Character Repeat', () => {
    it('pass test 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    })
    it('pass test 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    })
    it('pass test 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    })
    it('pass test 4', () => {
        expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
    })
})