import rotate from "./RotateArray";

describe('Rotate Array', () => {
    it('test case 1', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        rotate(arr, k);
        expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })
    it('test case 2', () => {
        const arr = [-1, -100, 3, 99];
        const k = 2;
        rotate(arr, k);
        expect(arr).toEqual([3, 99, -1, -100]);
    })
    it('test case 3', () => {
        const arr = [1, 2];
        const k = 0;
        rotate(arr, k);
        expect(arr).toEqual([1, 2]);
    })
    it('test case 4', () => {
        const arr = [1, 2];
        const k = 3;
        rotate(arr, k);
        expect(arr).toEqual([2, 1]);
    })
})