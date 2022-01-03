// 90. Subsets II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  const backtrack = (idx, subSets) => {
    let start = idx;
    res.push([...subSets]);

    for (let i = idx; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      subSets.push(nums[i]);
      backtrack(i + 1, subSets);
      subSets.pop();
    }
  };

  backtrack(0, []);

  return res;
};

// console.log(sequencesLengthK([1, 2, 2], 2));

console.log(subsetsWithDup([1, 2, 2]));
// expected: [[],[1],[1,2],[1,2,2],[2],[2,2]]
