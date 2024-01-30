import evalRPN from "./EvalRPN";

describe("Maximum Product Subarray", () => {
  it("pass test case 1", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });
  it("pass test case 2", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });
  it("pass test case 3", () => {
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ])
    ).toBe(22);
  });
});
