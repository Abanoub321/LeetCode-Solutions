import divideArray from "./divideArray";

describe("Maximum Erasure Value", () => {
  it("pass test 1", () => {
    const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
    const k = 2;
    const result = divideArray(nums, k);
    const expected = [
      [1, 1, 3],
      [3, 4, 5],
      [7, 8, 9],
    ];
    expect(result).toEqual(expected);
  });
  it("pass test 2", () => {
    const nums = [1, 3, 3, 2, 7, 3];
    const k = 3;
    const result = divideArray(nums, k);
    const expected: number[][] = [];
    expect(result).toEqual(expected);
  });
});
