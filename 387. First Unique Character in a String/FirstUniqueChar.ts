function firstUniqChar(s: string): number {
    let map: { [key: string]: number } = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            map[s[i]] = -1;
        } else {
            map[s[i]] = i
        }
    }
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] !== -1)
            return map[keys[i]]
    }

    return -1;
};

export default firstUniqChar;
