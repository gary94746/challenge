import { solved } from "../src/app";

const answer = [
  1,
  2,
  "Music",
  4,
  "TI",
  "Music",
  7,
  8,
  "Music",
  "TI",
  11,
  "Music",
  13,
  14,
  "Musical",
];

describe("Complete program", () => {
  it('should print 1 2 "Music" 4 "TI" ...', () => {
    const consoleSpy = jest.spyOn(console, "log");
    solved(15);
    answer.forEach((v, i) => {
      expect(consoleSpy).toHaveBeenNthCalledWith(i + 1, v);
    });
  });

  it("should fail with negative range", () => {
    try {
      solved(-1);
    } catch (e) {
      expect(e.message).toBe("Invalid array length");
    }
  });
});
