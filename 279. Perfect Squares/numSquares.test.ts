import numSquares from "./numSquares";

describe("Move Zeroes", () => {
  it("pass test 1", () => {
    expect(numSquares(12)).toBe(3);
  });
  it("pass test 2", () => {
    expect(numSquares(13)).toBe(2);
  });
});
