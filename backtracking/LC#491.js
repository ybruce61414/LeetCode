// 491. Increasing Subsequences
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];

  return res;
};

const sequencesK = (arr, k) => {
  let res = [];

  const backtrack = (comb, idx) => {
    if (comb.length === k) {
      res.push([...comb]);
    }

    for (let i = idx; i < arr.length; i++) {}
  };

  backtrack([], 0);
};

console.log(findSubsequences([4, 6, 7, 7]));
// expected: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
