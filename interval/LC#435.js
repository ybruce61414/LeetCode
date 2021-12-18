// 435. Non-overlapping Intervals

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count += 1;
      end = Math.min(end, intervals[i][1]);
    } else {
      end = intervals[i][1];
    }
  }
  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
