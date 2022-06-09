function isValidSudoku(board: string[][]): boolean {
    let map: { [key: string]: boolean } = {};

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;
            if (map[`${val}r${i}`] || map[`${val}c${j}`] || map[`${val}b${Math.floor(i / 3)}-${Math.floor(j / 3)}`]) return false;
            map[`${val}r${i}`] = true;
            map[`${val}c${j}`] = true;
            map[`${val}b${Math.floor(i / 3)}-${Math.floor(j / 3)}`] = true;
        }
    }

    return true;
};

export default isValidSudoku;