import canJump from "./CanJump";


describe('Jump Game', () => {
    it('pass test case 1', () => {
        const input = [2, 3, 1, 1, 4];
        const output = true;
        expect(canJump(input)).toEqual(output);
    })
    it('pass test case 2', () => {
        const input = [3, 2, 1, 0, 4];
        const output = false;
        expect(canJump(input)).toEqual(output);
    })
    it('pass test case 3', () => {
        const input = [0];
        const output = true;
        expect(canJump(input)).toEqual(output);
    })
    it('pass test case 4', () => {
        const input = [2, 0];
        const output = true;
        expect(canJump(input)).toEqual(output);
    })
    it('pass test case 5', () => {
        const input = [1, 0, 1, 0];
        const output = false;
        expect(canJump(input)).toEqual(output);
    })
})