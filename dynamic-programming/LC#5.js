/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false)
  );

  let max = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) dp[j][i] = true;

      if (s[i] === s[j]) {
        if (i - j >= 2) {
          dp[j][i] = dp[j + 1][i - 1];
        } else {
          dp[j][i] = true;
        }
      }

      // update max
      if (dp[j][i] && i - j + 1 > max.length) {
        max = s.slice(j, i + 1);
      }
    }
  }

  return max;
};

console.log(longestPalindrome("babad"));
