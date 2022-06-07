import minCostClimbingStairs from "./MinCostCilmbingStairs";

describe('Min Cost Cilmbing Stairs', () => {
    it('test case 1', () => {
        const cost = [10, 15, 20];
        expect(minCostClimbingStairs(cost)).toEqual(15);
    })
    it('test case 2', () => {
        const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(minCostClimbingStairs(cost)).toEqual(6);
    })
})