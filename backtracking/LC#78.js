// 78. Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  for (let i = 0; i <= nums.length; i++) {
    res = [...res, ...combine(nums, i)];
  }

  return res;
};

const combine = (arr, k) => {
  let res = [];

  const backtrack = (comb, idx) => {
    if (comb.length === k) {
      res.push([...comb]);
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      let char = arr[i];
      comb.push(char);
      backtrack(comb, i + 1);
      comb.pop();
    }
  };

  backtrack([], 0);

  return res;
};

console.log(subsets([1, 2, 3]));
// expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// console.log(combine([1, 2, 3], 0));
