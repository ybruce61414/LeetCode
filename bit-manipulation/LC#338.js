// 338. Counting Bits
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits0 = function (n) {
  let res = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    res[i] = countOne(i);
  }

  return res;
};

const countOne = (integer) => {
  //time O(logn)
  let count = 0;
  let temp = integer;

  while (temp > 0) {
    temp = temp & (temp - 1);
    count += 1;
  }

  return count;
};

var countBits = function (n) {
  let dp = new Array(n + 1);
  let highBit = 0;
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) highBit = i;
    dp[i] = dp[i - highBit] + 1;
  }

  return dp;
};

// console.log(countOne(3));

console.log(countBits(2));
// [0,1,1]

console.log(countBits(5));
