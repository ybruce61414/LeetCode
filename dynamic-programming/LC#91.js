/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let len = s.length;
  s = " " + s;
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= len; i++) {
    let w1 = s[i].charCodeAt(0) - "0".charCodeAt(0);
    let w2 =
      (s[i - 1].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
      s[i].charCodeAt(0) -
      "0".charCodeAt(0);

    if (1 <= w1 && w1 <= 9) {
      dp[i] = dp[i - 1];
    }
    if (10 <= w2 && w2 <= 26) {
      dp[i] = dp[i] + dp[i - 2];
    }
  }

  return dp[len];
};

console.log(numDecodings("06"));
s = [1, 2, 3];
s[-1] = 10;
// console.log("0".charCodeAt(0));
