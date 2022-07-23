export function determinant(m: number[][]): number {
  if (invalidMatrix(m)) {
    throw new Error('Invalid Matrix');
  }
  if (m.length === 1) {
    return determinant1x1(m);
  }
  if (m.length === 2) {
    return determinant2x2(m);
  }
  let determinantValue = 0;
  for (let i = 0; i < m[0].length; i++) {
    const sign = i % 2 === 0 ? 1 : -1;
    const element = m[0][i] * sign;
    determinantValue += element * determinant(getMatrixWithoutRowCol(m, 0, i));
  }
  return determinantValue;
}

function invalidMatrix(m: number[][]): boolean {
  for (const row of m) {
    if (row.length !== m.length) {
      return true;
    }
  }
  return false;
}

function getMatrixWithoutRowCol(m: number[][], excludeRow: number, excludeColumn: number): number[][] {
  return m
    .filter((value, index) => excludeRow !== index)
    .map((row) => row.filter((value, index) => excludeColumn !== index));
}

function determinant2x2(m: number[][]): number {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

function determinant1x1(m: number[][]): number {
  return m[0][0];
}
