import search from "./BinarySearch";

describe('Binary Search', () => {
    it('should pass test 1', () => {
        let result = search([-1, 0, 3, 5, 9, 12], 9);
        expect(result).toBe(4);
    })
    it('should pass test 2', () => {
        let result = search([-1, 0, 3, 5, 9, 12], 2);
        expect(result).toBe(-1);
    })
});