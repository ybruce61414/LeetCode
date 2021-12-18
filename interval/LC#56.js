// 56. Merge Intervals

// 1 <= intervals.length <= 10 4
// intervals[i].length == 2
// 0 <= start[i] <= end[i] <= 10 4

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];

  let mergeItem = intervals[0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      mergeItem[1] = Math.max(intervals[i][1], mergeItem[1]);
      end = Math.max(intervals[i][1], mergeItem[1]);
    } else {
      res.push(mergeItem);
      mergeItem = intervals[i];
      end = intervals[i][1];
    }
  }

  res.push(mergeItem);

  return res;
};

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
//
// console.log(
//   merge([
//     [1, 4],
//     [2, 3],
//   ])
// );

// console.log(
//   merge([
//     [1, 10],
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//   ])
// );
//expected [[1,10]]

console.log(
  merge([
    [1, 3],
    [2, 3],
    [2, 2],
    [2, 2],
    [3, 3],
    [4, 6],
    [5, 7],
  ])
);
//expected [[1,3],[4,7]]
