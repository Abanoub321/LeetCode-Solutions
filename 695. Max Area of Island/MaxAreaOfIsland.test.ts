import maxAreaOfIsland from "./MaxAreaOfIsland";


describe('Maximum Area of Island', () => {
    it('should pass test case 1', () => {
        const input = [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
            , [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
            , [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0]
            , [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        ]
        const output = 6;
        expect(maxAreaOfIsland(input)).toEqual(output);
    })
    it('should pass test case 2', () => {
        const input = [[0,0,0,0,0,0,0,0]]
        const output = 0;
        expect(maxAreaOfIsland(input)).toEqual(output);
    })
})