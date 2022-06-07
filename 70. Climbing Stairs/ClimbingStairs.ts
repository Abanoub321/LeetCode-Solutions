function climbStairs(n: number): number {
    let arr: number[] = [];
    return climbCount(n, arr);
};

const climbCount = (n: number, arr: number[]): number => {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (arr[n] != undefined) return arr[n];
    arr[n] = climbCount(n - 1, arr) + climbCount(n - 2, arr);
    return arr[n];
}

export default climbStairs;