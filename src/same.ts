/**
 * How often two series step the same way.
 * This is not a correlation coefficient.
 */

export type Steps = { pairs: number; same: number; opposite: number; flat: number };

export function sameWay(left: readonly bigint[], right: readonly bigint[]): Steps {
  if (left.length !== right.length) throw new Error("the two series must be the same length");
  if (left.length < 2 || left.length > 20) throw new Error("pass 2 to 20 points");
  let same = 0;
  let opposite = 0;
  let flat = 0;
  for (let i = 1; i < left.length; i += 1) {
    const a = left[i] - left[i - 1];
    const b = right[i] - right[i - 1];
    if (a === 0n || b === 0n) flat += 1;
    else if ((a > 0n) === (b > 0n)) same += 1;
    else opposite += 1;
  }
  return { pairs: left.length - 1, same, opposite, flat };
}
