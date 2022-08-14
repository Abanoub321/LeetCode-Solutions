import reverseString from "./ReverseString";

describe('Reverse String', () => {
    it('pass test 1', () => {
        let s = ["h","e","l","l","o"];
        reverseString(s);
        expect(s).toEqual(["o","l","l","e","h"]);
    })
    it('pass test 2', () => {
        let s = ["H","a","n","n","a","h"];
        reverseString(s);
        expect(s).toEqual(["h","a","n","n","a","H"]);
    })
})