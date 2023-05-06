function makesquare(matchsticks: number[]): boolean {
    const sum = matchsticks.reduce((a, b) => a + b, 0);
    if (sum % 4 !== 0) return false;
    const side = sum / 4;
    const sides = [0, 0, 0, 0];
    let sortedMatchsticks = matchsticks.sort((a, b) => b - a);
    return dfs(sortedMatchsticks, sides, side, 0);
};

function dfs(matchsticks: number[], sides: number[], side: number, index: number): boolean {
    if (index === matchsticks.length) {
        return sides.every(side => side === side);
    }

    for (let i = 0; i < 4; i++) {
        if (sides[i] + matchsticks[index] > side) continue;
        sides[i] += matchsticks[index];
        if (dfs(matchsticks, sides, side, index + 1)) return true;
        sides[i] -= matchsticks[index];
    }

    return false;
}

export default makesquare;