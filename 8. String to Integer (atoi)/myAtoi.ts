function myAtoi(s: string): number {
    let result = parseInt(s, 10);
    if(isNaN(result)) 
        return 0;
    if(result > Math.pow(2, 31) - 1)
        return Math.pow(2, 31) - 1;
    if(result < -Math.pow(2, 31))
        return -Math.pow(2, 31);
    return result;
};

export default myAtoi;