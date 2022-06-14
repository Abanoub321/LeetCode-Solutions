function minDistance(word1: string, word2: string): number {
    let dp: number[][] = []
    for (let i = 0; i < word1.length + 1; i++) {
        dp[i] = []
    }
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0) dp[i][j] = 0;
            else {
                dp[i][j] = (word1[i - 1] == word2[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    let val = dp[word1.length][word2.length]
    return word1.length - val + word2.length - val;
};

export default minDistance;