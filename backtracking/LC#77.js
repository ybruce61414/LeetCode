// 77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let answer = [];
  let temp = [];

  const DFShelper = (temp, idx) => {
    if (temp.length === k) {
      answer.push([...temp]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      temp.push(i);
      DFShelper(temp, i + 1);
      temp.pop();
    }
  };

  DFShelper(temp, 1);
  return answer;
};
console.log(combine(4, 2));
