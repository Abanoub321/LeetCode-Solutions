import findMedianSortedArrays from "./FindMedianSortedArray";

describe('Median of Two Sorted Arrays', () => {
    it('pass test 1', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(2);
    })
    it('pass test 2', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(2.5);
    })
})