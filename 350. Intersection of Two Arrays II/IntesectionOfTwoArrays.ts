function intersect(nums1: number[], nums2: number[]): number[] {
    let intersectArr: number[] = []
    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map.get(nums2[j])! > 0 ) {
            intersectArr.push(nums2[j])
            map.set(nums2[j], map.get(nums2[j])! - 1)
        }
    }
    return intersectArr;
};

export default intersect;