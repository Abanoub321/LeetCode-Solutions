function lengthOfLongestSubstring(s: string): number {
    let maxCntr = 0;
    let map: { [key: string]: number } = {};

    for (let i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            j = Math.max(j, map[s[i]] + 1);
        }
        map[s[i]] = i;
        maxCntr = Math.max(maxCntr, i - j + 1);
    }
    return maxCntr;
};

export default lengthOfLongestSubstring;