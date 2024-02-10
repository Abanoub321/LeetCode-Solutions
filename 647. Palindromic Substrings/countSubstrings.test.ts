import countSubstrings from "./countSubstrings";

describe("Maximum Area of Island", () => {
  it("should pass test case 1", () => {
    const s = "abc";
    expect(countSubstrings(s)).toBe(3);
  });
  it("should pass test case 2", () => {
    const s = "aaa";
    expect(countSubstrings(s)).toBe(6);
  });
});
