function makeTranspose(arr) {
  //  most fancy!
  return arr[0].map((x, colIdx) => {
    //x useless
    return arr.map((row) => row[colIdx]);
  });
}

function makeSquareTranspose(arr) {
  //  in place only for squared matrix
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < row; col++) {
      // Swap
      let temp = arr[row][col];
      arr[row][col] = arr[col][row];
      arr[col][row] = temp;
    }
  }
  return arr;
}

console.log(
  makeTranspose([
    [1, 2],
    [4, 5],
    [7, 8],
  ])
);

// expected: [ [ 1, 4, 7 ], [ 2, 5, 8 ] ]

console.log(
  makeSquareTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// expected: [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
