
function longestStrChain(words: string[]): number {
    words = words.sort((a, b) => a.length - b.length);
    let res = 1;
    const map = new Map<string, number>();
    for (const word of words) {
        map.set(word, 1);
        for (let i = 0; i < word.length; i++) {
            const sub = word.substring(0, i) + word.substring(i + 1);
            if (map.has(sub)) {
                map.set(word, map.get(sub)! + 1);
                res = Math.max(res, map.get(word)!);
            }
        }
    }
    return res;
};

export default longestStrChain;