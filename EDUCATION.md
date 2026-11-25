# Education — steps that point the same way

> **Rung:** `npm test` passes. This is a count of step directions. It is not a Pearson correlation, not an R², and not a price feed.  
> **The test is the rule.**

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Count same / opposite / flat steps |
| Intermediate | Treat a zero step as flat, not opposite |
| Masterclass | Refuse the word “coefficient” for this count |

---

## Beginner — one scene

`sameWay([1n, 2n, 2n, 1n], [1n, 3n, 3n, 0n])`

| Step | Left | Right | Label |
| --- | --- | --- | --- |
| 1 | +1 | +2 | same |
| 2 | 0 | 0 | flat |
| 3 | −1 | −3 | same |

Result: `{ pairs: 3, same: 2, opposite: 0, flat: 1 }`.

```bash
npm test
```

---

## Intermediate — rules

| Rule | Detail |
| --- | --- |
| Series length | 2 .. 20 points each |
| Equal length | required |
| Zero on either side | flat, not opposite |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| One point | throws |
| Different lengths | throws |
| Call it Pearson r | docs forbid |

### Exercises

1. Same-direction pairs in the sample? (**2**.)  
2. Flat pairs? (**1**.)  
3. Is this a correlation coefficient? (**No**.)

---

## Masterclass

The repo name contains “coefficient.” The function does not compute one. If a product needs Pearson or Spearman, implement that elsewhere with its own tests.

---

## What this course will not teach

- Statistical correlation
- Live price feeds
- Portfolio risk models
