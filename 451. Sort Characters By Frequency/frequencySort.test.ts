import frequencySort from "./frequencySort";

describe("473. Matchsticks to Square", () => {
  it("should pass test case 1", () => {
    const result = frequencySort("tree");
    expect(result).toBe("eetr");
  });

  it("should pass test case 2", () => {
    const result = frequencySort("cccaaa");
    expect(result).toBe("cccaaa");
  });

  it("should pass test case 3 without timelimit", () => {
    const result = frequencySort("Aabb");
    expect(result).toBe("bbAa");
  });
});
