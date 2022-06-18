function longestPalindrome(s: string): string {
    let start = 0, end = 0, max = Number.MIN_SAFE_INTEGER;
    let dp: boolean[][] = []

    for (let i = 0; i < s.length; i++)
        dp[i] = []

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (i === j) dp[i][j] = true
            else if (s[i] === s[j]) {
                if (j - i == 1) dp[i][j] = true
                else dp[i][j] = dp[i + 1][j - 1]
            }

            if (dp[i][j] && j - i >= max) {
                max = j - i
                start = i
                end = j
            }

        }
    }
    return s.substring(start, end + 1);
};

export default longestPalindrome;