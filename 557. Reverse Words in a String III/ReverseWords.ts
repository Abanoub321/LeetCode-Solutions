function reverseWords(s: string): string {
    let result: string = '';
    let words: string[] = s.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word: string = words[i];
        let reversedWord: string = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        result += reversedWord;
        if (i !== words.length - 1) {
            result += ' ';
        }
    }
    return result;
};

export default reverseWords;