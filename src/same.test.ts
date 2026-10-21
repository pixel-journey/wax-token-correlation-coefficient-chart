import { describe, expect, it } from "vitest";
import { sameWay } from "./same";

describe("same-way steps", () => {
  it("counts a flat step apart from a matching pair", () => {
    expect(sameWay([1n, 2n, 2n, 1n], [1n, 3n, 3n, 0n])).toEqual({ pairs: 3, same: 2, opposite: 0, flat: 1 });
    expect(() => sameWay([1n], [1n])).toThrow(/2 to 20/);
  });
});
