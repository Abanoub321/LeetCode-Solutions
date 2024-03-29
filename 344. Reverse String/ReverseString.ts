/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
        [[s[i], s[j]] = [s[j], s[i]]];
    }
};

export default reverseString;