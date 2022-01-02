// 77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
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
console.log(combine(4, 2));
