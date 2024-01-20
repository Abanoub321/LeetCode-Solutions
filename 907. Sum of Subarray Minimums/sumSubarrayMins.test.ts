import sumSubarrayMins from "./sumSubarrayMins";

describe("Maximum Sum Circular Subarray", () => {
  it("pass test case 1", () => {
    const arr = [3, 1, 2, 4];
    const expected = 17;
    const actual = sumSubarrayMins(arr);
    expect(actual).toBe(expected);
  });
  it("pass test case 2", () => {
    const arr = [11, 81, 94, 43, 3];
    const expected = 444;
    const actual = sumSubarrayMins(arr);
    expect(actual).toBe(expected);
  });
});
