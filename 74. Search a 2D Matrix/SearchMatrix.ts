function searchMatrix(matrix: number[][], target: number): boolean {
    let row = searchRows(0, matrix.length - 1, target, matrix);
    return BS(0, matrix[row].length - 1, target, matrix[row]);
};

const searchRows = (start: number, end: number, target: number, matrix: number[][]): number => {
    if (start > end) {
        return end < 0 ? start : end;
    }
    const mid = Math.floor((start + end) / 2);
    if (matrix[mid][0] === target) {
        return mid;
    }
    if (matrix[mid][0] > target) {
        return searchRows(start, mid - 1, target, matrix);
    }
    return searchRows(mid + 1, end, target, matrix);
}


const BS = (start: number, end: number, target: number, matrix: number[]): boolean => {
    if (start > end) {
        return false;
    }
    const mid = Math.floor((start + end) / 2);
    if (matrix[mid] === target) {
        return true;
    }
    if (matrix[mid] > target) {
        return BS(start, mid - 1, target, matrix);
    }
    return BS(mid + 1, end, target, matrix);
}

export default searchMatrix;