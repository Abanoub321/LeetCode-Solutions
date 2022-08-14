import firstUniqChar from "./FirstUniqueChar"


describe('First Unique Character in a string', () => {
    it('pass test case 1', () => {
        expect(firstUniqChar('leetcode')).toBe(0);
    })
    it('pass test case 2', () => {
        expect(firstUniqChar('loveleetcode')).toBe(2)
    })
    it('pass test case 3', () => {
        expect(firstUniqChar('aabb')).toBe(-1)
    })
})