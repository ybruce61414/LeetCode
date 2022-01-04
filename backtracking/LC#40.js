// 40. Combination Sum II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];

  const backtrack = (idx, temp) => {
    let start = idx;
    if (getSum(temp) > target) return;

    if (getSum(temp) === target) {
      res.push([...temp]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      temp.push(candidates[i]);
      backtrack(i + 1, temp);
      temp.pop();
    }
  };

  backtrack(0, []);

  return res;
};

const getSum = (arr) => {
  return arr.reduce((prev, curr) => {
    return curr + prev;
  }, 0);
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// Output:
//   [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
//   ]

// console.log(getSum([1, 2, 3]));
