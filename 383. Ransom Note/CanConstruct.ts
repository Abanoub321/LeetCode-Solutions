function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: { [key: string]: number } = {};
    for (let i = 0; i < magazine.length; i++)
        map[magazine[i]] = (map[magazine[i]] || 0) + 1;
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) return false;
        map[ransomNote[i]]--;
    }
    return true;
};

export default canConstruct;