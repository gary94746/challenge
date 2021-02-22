export function getWord(n: number): string | number {
  if (n % 5 == 0 && n % 3 == 0) return "Musical";
  const music = n % 3 || "Music";
  const ti = n % 5 || "TI";

  return [music, ti].find((e) => !Number.isInteger(e)) || n;
}
