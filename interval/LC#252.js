const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }

  return true;
};

console.log(
  canAttendMeetings([
    [15, 20],
    [5, 10],
    [0, 30],
  ])
);
