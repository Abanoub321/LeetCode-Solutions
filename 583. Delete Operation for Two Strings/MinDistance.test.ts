import minDistance from "./MinDistance";


describe('Delete Operation for Two Strings', () => {
    it('pass test case 1', () => {
        const input = ['sea', 'eat'];
        const output = 2;
        expect(minDistance(input[0], input[1])).toEqual(output);
    })
    it('pass test case 2', () => {
        const input = ['leetcode', 'etco'];
        const output = 4;
        expect(minDistance(input[0], input[1])).toEqual(output);
    })
})