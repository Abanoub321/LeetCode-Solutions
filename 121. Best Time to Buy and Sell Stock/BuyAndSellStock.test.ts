import maxProfit from "./BuyAndSellStock";

describe('Buy and sell stock', () => {
    it('test case 1', () => {
        let res = maxProfit([7, 1, 5, 3, 6, 4]);
        expect(res).toEqual(5);
    });
    it('test case 2', () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });
    it('test case 3', () => {
        let res = maxProfit([1,2]);
        expect(res).toEqual(1);
    })
})