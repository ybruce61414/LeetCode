// 57. Insert Interval

// 0 <= intervals.length <= 10 4
// intervals[i].length == 2
// 0 <= start i <= end i <= 10 5
// intervals is sorted by start i in ascending order.
//   newInterval.length == 2
// 0 <= start <= end <= 10 5

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const arr = intervals;
  arr.push(newInterval);
  arr.sort((a, b) => a[0] - b[0]);

  const res = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let lastInterval = res[res.length - 1];
    let currInterval = arr[i];

    if (currInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
    } else {
      res.push(currInterval);
    }
  }

  return res;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
// expected: [[1,5],[6,9]]

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
// expected: [[1,2],[3,10],[12,16]]
