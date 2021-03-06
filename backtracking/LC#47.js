// 47. Permutations II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique0 = function (nums) {
  let freqCounter = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    freqCounter[nums[i]] = (freqCounter[nums[i]] || 0) + 1;
  }

  const backtrack = (comb, counter) => {
    if (comb.length === nums.length) {
      res.push([...comb]);
      return;
    }

    let props = Object.keys(counter);
    for (let i = 0; i < props.length; i++) {
      let char = props[i];

      if (counter[char] > 0) {
        counter[char] -= 1;
        comb.push(Number(char));
        backtrack(comb, counter);
        comb.pop();
        counter[char] += 1;
      }
    }
  };

  backtrack([], freqCounter);

  return res;
};

var permuteUnique = function (nums) {
  //better sol
  nums.sort((a, b) => a - b);
  let res = [];

  const backtrack = (nums, temp) => {
    if (nums.length === 0) {
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let copyNums = [...nums];
      copyNums.splice(i, 1);

      temp.push(nums[i]);
      backtrack(copyNums, temp);
      temp.pop();
    }
  };

  backtrack(nums, []);
  return res;
};

console.log(permuteUnique([1, 2, 3]));
// expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

console.log(permuteUnique([1, 1, 2]));
// expected: [[1,1,2], [1,2,1], [2,1,1]]
