function minFallingPathSum(matrix: number[][]): number {
  let dp: number[][] = [];
  let n: number = matrix.length;
  let m: number = matrix[0].length;
  let min: number = Infinity;

  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }

  for (let i = 0; i < m; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(
          dp[i - 1][j],
          dp[i - 1][j - 1] ?? Infinity,
          dp[i - 1][j + 1] ?? Infinity
        );
    }
  }

  for (let i = 0; i < m; i++) {
    min = Math.min(min, dp[n - 1][i]);
  }
  
  return min;
}

export default minFallingPathSum;
