function reverse(x: number): number {
    let strNum = x.toString();
    let result = 0; 
    if (strNum[0] === '-') {
        strNum = strNum.slice(1);
        result = -1 * parseInt(strNum.split('').reverse().join(''));
    } else {
        result = parseInt(strNum.split('').reverse().join(''));
    }
    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result;
};

export default reverse;