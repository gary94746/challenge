import { solved } from "../src/app";

describe("Complete program", () => {
  it('should print 1 2 "Music" 4 "TI"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    solved(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Music");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "TI");
  });

  it("should fail with negative range", () => {
    try {
      solved(-1);
    } catch (e) {
      expect(e.message).toBe("Invalid array length");
    }
  });
});
