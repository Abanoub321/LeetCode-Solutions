const search = (nums: number[], target: number): number => {

    return binarySearch(0, nums.length - 1, nums, target);
}

const binarySearch = (start: number, end: number, nums: number[], target: number): number => {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    if (nums[mid] > target) {
        return binarySearch(start, mid - 1, nums, target);
    }
    return binarySearch(mid + 1, end, nums, target);
}


export default search;