function isValidSudoku(board: string[][]): boolean {
    let map: { [key: string]: true } = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c === '.') continue;
            if (map[c]) return false;
            map[c] = true;
        }
        map = {};    
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[j][i];
            if (c === '.') continue;
            if (map[c]) return false;
            map[c] = true;
        }
        map = {};
    }
    
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            for (let k = 0; k < 9; k++) {
                const c = board[i + Math.floor(k / 3)][j + k % 3];
                if (c === '.') continue;
                if (map[c]) return false;
                map[c] = true;
            }
            map = {};
        }
    }

    return true;
};

export default isValidSudoku;