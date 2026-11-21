# Security — same-way step count

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `sameWay([1,2,2,1], [1,3,3,0])` | pairs 3, same 2, opposite 0, flat 1 |
| Zero on either side | **flat**, not opposite |
| Length 1 | throws (need 2..20) |
| Unequal series length | throws |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Pearson / R² | **Not** computed |
| Price feed | Arguments only |
| Trading signal | Counts are not signals |

## Attack angles

1. Calling this a correlation coefficient.  
2. Treating same-way count as a trade signal.  
3. Claiming a live price series was scanned.  
4. Treating flat steps as opposite.

## Honesty limits

Step-direction count only. Repo name says "coefficient"; the function does not compute one.

| Sibling | Distinction |
| --- | --- |
| [market-cap bubble](https://github.com/pixel-journey/wax-market-cap-bubble) | supply × price / 10^decimals |
| [velocity scatter](https://github.com/pixel-journey/wax-collection-velocity-scatter-plot) | hold/velocity quadrants |

[docs.wax.io](https://docs.wax.io/).
