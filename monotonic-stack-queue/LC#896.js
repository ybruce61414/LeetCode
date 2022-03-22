var isMonotonic0 = function (nums) {
  if (nums.length < 3) return true;
  let stack = [nums[0]];
  let dir = null;

  for (let i = 1; i < nums.length; i++) {
    let top = stack[stack.length - 1];
    let cur = nums[i];

    // decreasing
    if (top > cur) {
      if (dir === null) {
        dir = -1;
      } else {
        if ((top - cur) * dir > 0) return false;
      }

      // increasing
    } else if (top < cur) {
      if (dir === null) {
        dir = 1;
      } else {
        if ((top - cur) * dir > 0) return false;
      }
    }
    stack.push(cur);
  }
  return true;
};

var isMonotonic = function (nums) {
  let des = true;
  let inc = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) des = false;
    if (nums[i] - nums[i - 1] < 0) inc = false;
  }

  return des || inc;
};

console.log(isMonotonic([1, 2, 2, 3]));
