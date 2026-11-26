import { describe, expect, it } from "vitest";
import { sameWay } from "./same";

describe("same-way steps", () => {
  it("counts a flat step apart from a matching pair", () => {
    expect(sameWay([1n, 2n, 2n, 1n], [1n, 3n, 3n, 0n])).toEqual({
      pairs: 3,
      same: 2,
      opposite: 0,
      flat: 1,
    });
    expect(() => sameWay([1n], [1n])).toThrow(/2 to 20/);
  });

  it("counts opposite directions", () => {
    expect(sameWay([1n, 2n, 1n], [1n, 0n, 1n])).toEqual({
      pairs: 2,
      same: 0,
      opposite: 2,
      flat: 0,
    });
  });

  it("treats a zero step on either side as flat", () => {
    expect(sameWay([1n, 1n, 2n], [1n, 5n, 6n])).toEqual({
      pairs: 2,
      same: 1,
      opposite: 0,
      flat: 1,
    });
  });

  it("refuses different lengths", () => {
    expect(() => sameWay([1n, 2n], [1n, 2n, 3n])).toThrow(/same length/);
  });

  it("refuses more than 20 points", () => {
    const long = Array.from({ length: 21 }, (_, i) => BigInt(i));
    expect(() => sameWay(long, long)).toThrow(/2 to 20/);
  });
});
