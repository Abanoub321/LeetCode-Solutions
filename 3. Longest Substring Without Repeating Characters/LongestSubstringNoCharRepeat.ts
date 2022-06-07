function lengthOfLongestSubstring(s: string): number {
    let cntr = 0;
    let maxCntr = 0;
    let map: { [key: string]: boolean } = {};

    let i = 0, j = 0;
    while (i < s.length && j < s.length) {
        if (!map[s[j]]) {
            map[s[j]] = true;
            j++;
            cntr++;
            maxCntr = Math.max(cntr, maxCntr);
        } else {
            map[s[i]] = false;
            i++;
            cntr--;
        }
    }
    return maxCntr;
};

export default lengthOfLongestSubstring;