"use client";

import { sameWay } from "./same";

export function Demo() {
  const steps = sameWay([1n, 2n, 2n, 1n], [1n, 3n, 3n, 0n]);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Steps that point the same way</h1>
      <p className="lede">Two series, four points. One step is flat, so it is not counted as agreement. This is not a correlation coefficient and no price was fetched.</p>
      <p>
        {steps.same} same, {steps.opposite} opposite, {steps.flat} flat, out of {steps.pairs}.
      </p>
    </main>
  );
}
