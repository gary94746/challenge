import { getWord } from "../src/get-word";

describe("Get word", () => {
  it("should return Musical", () => {
    expect(getWord(15)).toBe("Musical");
  });

  it("should return Music", () => {
    expect(getWord(3)).toBe("Music");
  });

  it("should return TI", () => {
    expect(getWord(5)).toBe("TI");
  });

  it("should return the number", () => {
    expect(getWord(4)).toBe(4);
  });
});
