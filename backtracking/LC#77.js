// 77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine0 = function (n, k) {
  let answer = [];

  const backtrack = (comb, idx) => {
    if (comb.length === k) {
      answer.push([...comb]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      comb.push(i);
      backtrack(comb, i + 1);
      comb.pop();
    }
  };

  backtrack([], 1);
  return answer;
};

// review
var combine = function (n, k) {
  let res = [];

  const backtrack = (idx, temp) => {
    if (temp.length === k) {
      res.push([...temp]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      temp.push(i);
      backtrack(i + 1, temp);
      temp.pop();
    }
  };

  backtrack(1, []);
  return res;
};

console.log(combine(4, 2));
