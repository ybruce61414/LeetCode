// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder1 = function (matrix) {
  let res = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let down = matrix.length - 1;

  while (res.length < matrix[0].length * matrix.length) {
    //  go right
    for (let i = left; i <= right && down >= top; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;

    // go down
    for (let i = top; i <= down && right >= left; i++) {
      res.push(matrix[i][right]);
    }
    right -= 1;

    // go left
    for (let i = right; i >= left && down >= top; i--) {
      res.push(matrix[down][i]);
    }
    down -= 1;

    // go top
    for (let i = down; i >= top && right >= left; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }

  return res;
};

var spiralOrder2 = function (matrix) {
  let spiralArr = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let down = matrix.length - 1;
  let dir = "right";

  while (left <= right && top <= down) {
    if (dir === "right") {
      for (let i = left; i <= right; i++) {
        spiralArr.push(matrix[top][i]);
      }
      top += 1;
      dir = "down";
    } else if (dir === "down") {
      for (let i = top; i <= down; i++) {
        spiralArr.push(matrix[i][right]);
      }
      right -= 1;
      dir = "left";
    } else if (dir === "left") {
      for (let i = right; i >= left; i--) {
        spiralArr.push(matrix[down][i]);
      }
      down -= 1;
      dir = "top";
    } else if (dir === "top") {
      for (let i = down; i >= top; i--) {
        spiralArr.push(matrix[i][left]);
      }
      left += 1;
      dir = "right";
    }
  }

  return spiralArr;
};

console.log(
  spiralOrder2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// expected: [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// expected: [1,2,3,4,8,12,11,10,9,5,6,7]

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//   ])
// );
