function generate(numRows: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        result.push([]);
        result[i][0] = result[i][i] = 1;
        for (let j = 1; j < i; j++) {
            let left = result[i - 1][j - 1] ? result[i - 1][j - 1] : 0;
            let right = result[i - 1][j] ? result[i - 1][j] : 0;
            result[i][j] = left + right;
        }
    }
    return result;
};


export default generate;