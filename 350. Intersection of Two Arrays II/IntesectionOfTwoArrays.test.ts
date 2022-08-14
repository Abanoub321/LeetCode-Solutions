import intersect from "./IntesectionOfTwoArrays";

describe('Intersection of two Arrays', () => {
    it('passes test 1', () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    })
    it('passes test 2', () => {
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4]).sort()).toEqual([4, 9].sort());
    })
})