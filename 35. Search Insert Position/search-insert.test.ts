import searchInsert from "./SearchInsert";

describe('search insert',()=> {
    it('should pass test 1',()=> {
        const nums = [1,3,5,6];
        const target = 5;
        expect(searchInsert(nums, target)).toBe(2);
    })
    it('should pass test 2',()=> {
        const nums = [1,3,5,6];
        const target = 2;
        expect(searchInsert(nums, target)).toBe(1);
    })
    it('should pass test 3',()=> {
        const nums = [1,3,5,6];
        const target = 7;
        expect(searchInsert(nums, target)).toBe(4);
    })
})