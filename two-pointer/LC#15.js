// 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (r > l) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;
        r -= 1;
        while (nums[l] === nums[l - 1]) {
          l += 1;
        }
      } else if (nums[l] + nums[r] < target) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }
  return res;
};

var threeSum0 = function (nums) {
  //  brute force
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < nums.length; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          for (let k = j + 1; k < nums.length; k++) {
            if (k === j + 1 || nums[k] !== nums[k - 1]) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                res.push([nums[i], nums[j], nums[k]]);
              }
            }
          }
        }
      }
    }
  }

  return res;
};

var threeSum1 = function (nums) {
  //  brute force improvement using pointer
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let third = nums.length - 1;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < nums.length; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          // determine to move third pointer
          while (nums[i] + nums[j] + nums[third] > 0) {
            third -= 1;
          }

          // checking sum is equal to 0
          if (nums[i] + nums[j] + nums[third] === 0 && third > j) {
            res.push([nums[i], nums[j], nums[third]]);
          }
        }
      }
    }
  }

  return res;
};

console.log(threeSum1([-1, 0, 1, 2, -1, -4]));
// [[-1,-1,2],[-1,0,1]]
