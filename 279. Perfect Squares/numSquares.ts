function numSquares(n: number): number {
  const db: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  db[0] = 0;
  for (let i = 1; i <= n; i++) {
    let j = 1;
    while (j ** 2 <= i) {
      db[i] = Math.min(db[i], db[i - j ** 2] + 1);
      j++;
    }
  }
  return db[n];
}

export default numSquares;
