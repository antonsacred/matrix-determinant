# Matrix (2d array) Determinant 
[![codecov](https://codecov.io/gh/antonsacred/matrix-determinant/branch/master/graph/badge.svg?token=C10CHOFXWE)](https://codecov.io/gh/antonsacred/matrix-determinant)

This package is allowing you to calculate matrix determinant.

## Example
```typescript
import { determinant } from "matrix-determinant";

const m1 = [[1]];
console.log(determinant(m1)); // 1

const m2 = [[1, 3],
            [2, 5]];
console.log(determinant(m2)); // -1

const m3 = [[2, 5, 3],
            [1, -2, -1],
            [1, 3, 4]];
console.log(determinant(m3)); // -20

const m4 = [[1, 2, 3, 4],
            [5, 0, 2, 8],
            [3, 5, 6, 7],
            [2, 5, 3, 1]];
console.log(determinant(m4)); // 24


const mInvalid = [[1, 2, 3, 4],
                  [5, 0, 2, 8],
                  [3, 7],
                  [2, 5, 3, 1]];
console.log(determinant(mInvalid)); // Error("Invalid Matrix")
```