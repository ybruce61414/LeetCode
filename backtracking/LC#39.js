// // 39. Combination Sum
var combinationSum = function (candidates, target) {
  let res = [];

  const dfs = (temp, idx) => {
    if (getSum(temp) > target) {
      return;
    }

    if (getSum(temp) === target) {
      console.log(temp);
      res.push([...temp]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      let currEl = candidates[i];
      temp.push(currEl);
      dfs(temp, i);
      temp.pop();
    }
  };

  dfs([], 0);

  return res;
};

const getSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(combinationSum([2, 3, 6, 7], 7));

// const hello = () => {
//   return givestrnig();
// };
//
// const givestrnig = () => {
//   return "hello";
// };
//
// console.log(hello());
