import longestPalindrome from "./LongestPalindrome"

describe('Longest Palindrome Substring', () => {
    it('pass test case 1', () => {
        expect(longestPalindrome('babad')).toBe('bab' || 'aba')
    })
    it('pass test case 2', () => {
        expect(longestPalindrome('cbbd')).toBe('bb')
    })
})