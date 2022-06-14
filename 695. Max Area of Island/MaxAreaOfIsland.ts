function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;
    let visted: boolean[][] = [];
    for (let i = 0; i < grid.length; i++)
        visted[i] = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visted[i][j]) {
                maxArea = Math.max(maxArea, dfs(grid, i, j, visted));
            }
            visted[i][j] = true;
        }
    }
    return maxArea;
};

const dfs = (grid: number[][], i: number, j: number, visted: boolean[][]): number => {

    if (i >= grid.length || i < 0 || j < 0 || j >= grid[i].length || visted[i][j] || grid[i][j] === 0)
        return 0;
    visted[i][j] = true;
    return 1 + dfs(grid, i + 1, j, visted) + dfs(grid, i, j + 1, visted) + dfs(grid, i - 1, j, visted) + dfs(grid, i, j - 1, visted);
}

export default maxAreaOfIsland;

