import climbStairs from "./ClimbingStairs";

describe('Climbing Stairs', () => {
    it('pass test 1', () => {
        expect(climbStairs(2)).toEqual(2);
    })
    it('pass test 2', () => {
        expect(climbStairs(3)).toEqual(3);
    })
})