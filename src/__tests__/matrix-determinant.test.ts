import { determinant } from '../index';

test('determinant value', () => {
  const m1 = [
    [1, 3],
    [2, 5],
  ];
  const m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ];
  const m3 = [
    [1, 2, 3, 4],
    [5, 0, 2, 8],
    [3, 5, 6, 7],
    [2, 5, 3, 1],
  ];
  const m4 = [
    [2, 5, 3, 6, 3],
    [17, 5, 7, 4, 2],
    [7, 8, 5, 3, 2],
    [9, 4, -6, 8, 3],
    [2, -5, 7, 4, 2],
  ];
  const m6 = [
    [1, 2, 4, 0, 9],
    [2, 3, 4, 1, 1],
    [6, 7, 3, 9, 3],
    [2, 0, 3, 0, 2],
    [4, 5, 2, 3, 1],
  ];
  const m7 = [
    [2, 4, 5, 3, 1, 2],
    [2, 4, 7, 5, 3, 2],
    [1, 1, 0, 2, 3, 1],
    [1, 3, 9, 0, 3, 2],
    [1, 1, 2, 2, 4, 1],
    [0, 0, 4, 1, 2, 3],
  ];
  const m8 = [
    [3, 2, 1, 4, 0, 1],
    [1, 2, 3, 1, 9, 1],
    [0, 2, 1, 1, 9, 0],
    [8, 2, 1, 0, 2, 3],
    [2, 3, 4, 0, 1, 2],
    [2, 1, 0, 0, 1, 1],
  ];

  expect(determinant([[1]])).toEqual(1);
  expect(determinant(m1)).toEqual(-1);
  expect(determinant(m2)).toEqual(-20);
  expect(determinant(m3)).toEqual(24);
  expect(determinant(m4)).toEqual(2060);
  expect(determinant(m6)).toEqual(1328);
  expect(determinant(m7)).toEqual(88);
  expect(determinant(m8)).toEqual(-536);
});

test('determinant error', () => {
  const m = [[1, 2]];
  const m2 = [
    [1, 2, 3],
    [1, 2],
  ];
  const m3 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2],
  ];
  expect(() => determinant(m)).toThrow(Error);
  expect(() => determinant(m)).toThrow('Invalid Matrix');
  expect(() => determinant(m2)).toThrow(Error);
  expect(() => determinant(m2)).toThrow('Invalid Matrix');
  expect(() => determinant(m3)).toThrow(Error);
  expect(() => determinant(m3)).toThrow('Invalid Matrix');
});
