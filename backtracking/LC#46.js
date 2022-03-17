// 46. Permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute0 = function (nums) {
  let res = [];

  const backtrack = (nums, res, temp) => {
    if (nums.length === 0) {
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.filter((item, index) => index !== i);
      temp.push(nums[i]);
      backtrack(newNums, res, temp);
      temp.pop();
    }
  };

  backtrack(nums, res, []);

  return res;
};

var permute = function (nums) {
  let res = [];

  const backtrack = (nums, temp) => {
    if (nums.length === 0) {
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      let newNums = nums.filter((item) => item !== nums[i]);
      temp.push(nums[i]);
      backtrack(newNums, temp);
      temp.pop();
    }
  };

  backtrack(nums, []);
  return res;
};

console.log(permute([1, 2, 3]));
// expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
