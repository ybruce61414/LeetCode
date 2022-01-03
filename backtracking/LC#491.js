// 491. Increasing Subsequences
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];

  const backtrack = (idx, subSets) => {
    const unique = new Set();
    if (subSets.length > 1) {
      res.push([...subSets]);
    }

    for (let i = idx; i < nums.length; i++) {
      if (nums[idx - 1] !== undefined && nums[i] < nums[idx - 1]) continue;

      if (unique.has(nums[i])) continue;

      unique.add(nums[i]);
      subSets.push(nums[i]);
      backtrack(i + 1, subSets);
      subSets.pop();
    }
  };

  backtrack(0, []);

  return res;
};

console.log(findSubsequences([4, 6, 7, 7]));
// expected: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

// const a = [1, 2, 3];
// console.log(a[-2]);
