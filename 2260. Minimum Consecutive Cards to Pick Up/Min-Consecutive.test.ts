import minimumCardPickup from "./minimumCardPickup";

describe('Minimum Consecutive Cards to Pick Up', () => {
    it('should pass test 1 ', () => {
        let result = minimumCardPickup([3,4,2,3,4,7]);
        expect(result).toBe(4);
    })
    it('should pass test 2 ', () => {
        let result = minimumCardPickup([1,0,5,3]);
        expect(result).toBe(-1);
    })
    it('should pass test 3 ', () => {
        let result = minimumCardPickup([0,0]);
        expect(result).toBe(2);
    })
});