function removePalindromeSub(s: string): number {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] == s[j]) {
            i++;
            j--;
        }
        else {
            return 2;
        }
    }
    return 1;
};


export default removePalindromeSub;