function convert(s: string, numRows: number): string {
    if (numRows === 1) 
        return s;
    let arr: string[][] = []
    for (let i = 0; i < numRows; i++)
        arr[i] = []
    for(let i = 0; i < s.length; i++) {
        let row = i % (2 * numRows - 2)
        if (row >= numRows)
            row = 2 * numRows - 2 - row
        arr[row][i] = s[i]
    }
    let res = ""
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != undefined)
                res += arr[i][j]
        }
    }
    return res
};

export default convert;