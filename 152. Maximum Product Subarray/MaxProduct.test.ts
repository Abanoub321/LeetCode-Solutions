import maxProduct from "./MaxProduct"


describe('Maximum Product Subarray', () => {
    it('pass test case 1', () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6)
    })
    it('pass test case 2', () => {
        expect(maxProduct([-2, 0, -1])).toBe(0)
    })
    it('pass test case 3', () => {
        expect(maxProduct([-2, 3, -4])).toBe(24)
    })
    it('pass test case 4', () => {
        expect(maxProduct([-4, -3, -2])).toBe(12)
    })
})