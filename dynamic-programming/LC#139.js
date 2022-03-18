// 139. Word Break
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  //best dp solution!
  let dp = new Array(s.length + 1).fill(false);

  // base case
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      len = word.length;
      if (i + len - 1 <= s.length - 1 && s.slice(i, i + len) === word) {
        dp[i] = dp[i + len];
      }

      if (dp[i]) break;
    }
  }

  return dp[0];
};

console.log(wordBreak("leetcode", ["leet", "code"]));

// let str = "abc";
//
// console.log(str[0], str[4]);
