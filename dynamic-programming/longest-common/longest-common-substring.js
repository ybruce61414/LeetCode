// Longest Common Substring
// using dp
let str1 = "ABCXYZAY";
let str2 = "XYZABCB";

// answer 'XYZA'

const LCS = (str1, str2) => {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    new Array(str1.length + 1).fill(0)
  );
  const info = { size: 0, idx: null };

  for (let row = 1; row <= str1.length; row++) {
    for (let col = 1; col <= str2.length; col++) {
      if (str1[row - 1] === str2[col - 1])
        dp[row][col] = 1 + dp[row - 1][col - 1];

      // update info
      // size = Math.max(size, dp[row][col])
      if (info.size < dp[row][col]) {
        info.size = dp[row][col];
        info.idx = col - 1;
      }
    }
  }

  return str2.slice(info.idx - info.size + 1, info.idx + 1);
};

console.log(LCS(str1, str2));
console.log(LCS("", ""));
