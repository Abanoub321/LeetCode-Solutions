function minimumTotal(triangle: number[][]): number {
    const dp: number[] = [];

    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (dp[j] === undefined) {
                dp[j] = triangle[i][j];
                continue;
            }
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};



export default minimumTotal;