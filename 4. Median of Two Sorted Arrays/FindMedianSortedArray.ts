function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    let arr = []
    let j = 0;
    for (let i = 0; i <= Math.ceil(totalLength / 2);) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }
    return totalLength % 2 === 0 ? (arr[Math.floor(totalLength / 2)] + arr[Math.floor(totalLength / 2) - 1]) / 2 : arr[Math.floor(totalLength / 2)];
};

export default findMedianSortedArrays;