import reverseWords from "./ReverseWords";


describe('Reverse Words in a string III', () => {
    it('pass test 1', () => {
        expect(reverseWords('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc');
    })
    it('pass test 2', () => {
        expect(reverseWords('God Ding')).toBe('doG gniD')
    })
})