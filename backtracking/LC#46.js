// 46. Permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
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

console.log(permute([1, 2, 3]));
// expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
