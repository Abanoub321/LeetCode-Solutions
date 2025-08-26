export default function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = [];
  const rows = mat.length;
  const cols = mat[0].length;
  
  let row = 0, col = 0;
  let direction = 1; // 1 for up-right, -1 for down-left
  
  while (result.length < rows * cols) {
    result.push(mat[row][col]);
    
    if (direction === 1) { // going up-right
      if (col === cols - 1) { // hit right boundary
        row++;
        direction = -1;
      } else if (row === 0) { // hit top boundary
        col++;
        direction = -1;
      } else {
        row--;
        col++;
      }
    } else { // going down-left
      if (row === rows - 1) { // hit bottom boundary
        col++;
        direction = 1;
      } else if (col === 0) { // hit left boundary
        row++;
        direction = 1;
      } else {
        row++;
        col--;
      }
    }
  }
  
  return result;
}
