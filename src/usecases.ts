import { CHAIN_ORIGIN, currencyBalance } from "./api";
import { sameWay } from "./same";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const steps = sameWay([1n, 2n, 2n, 1n], [1n, 3n, 3n, 0n]);

export const USE_CASES: UseCase[] = [
  {
    title: "One balance is not a series",
    detail: `${steps.same} steps match, ${steps.flat} is flat, ${steps.opposite} oppose. get_currency_balance is a single number. It is not sent.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "The market list is not paired either",
    detail: "No coefficient is published. No trade is built.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (steps.pairs !== 3 || steps.same !== 2) throw new Error("steps");
}
