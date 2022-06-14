import maxProduct from "./MaxProduct"


describe('Maximum Product Subarray', () => {
    it('pass test case 1', () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6)
    })
    it('pass test case 2', () => {
        expect(maxProduct([-2, 0, -1])).toBe(0)
    })
})