import minFallingPathSum from "./minFallingPathSum";

describe("Squares of a Sorted Array", () => {
  it("should pass test 1", () => {
    const matrix = [
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ];
    const expected = 13;
    const actual = minFallingPathSum(matrix);
    expect(actual).toBe(expected);
  });
  it("should pass test 2", () => {
    const matrix = [
      [-19, 57],
      [-40, -5],
    ];
    const expected = -59;
    const actual = minFallingPathSum(matrix);
    expect(actual).toBe(expected);
  });
});
