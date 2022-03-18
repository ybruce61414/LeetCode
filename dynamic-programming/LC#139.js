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

var wordBreak2 = function (s, wordDict) {
  // dfs
  let wordSet = new Set(wordDict);
  let memo = new Array(s.length);

  const dfs = (idx) => {
    let start = idx;
    if (idx === s.length) return true;
    if (memo[idx] !== undefined) return memo[idx];

    for (let i = start; i < s.length; i++) {
      let pstr = s.slice(start, i + 1);
      if (wordSet.has(pstr) && dfs(i + 1)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  };

  return dfs(0);
};

console.log(wordBreak("leetcode", ["leet", "code"]));

// let str = "abc";
//
// console.log(str[0], str[4]);
