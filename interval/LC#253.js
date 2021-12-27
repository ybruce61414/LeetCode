// 253
const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let pq = [intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    let min = pq[0];
    if (intervals[i][0] >= min) {
      pq.shift();
    }
    pq.push(intervals[i][1]);
    pq.sort((a, b) => a - b);
  }

  return pq.length;
};

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
// expected:  2

console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
);
// expected:  1
