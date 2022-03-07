//  322. Coin Change
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange0 = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let deno of coins) {
      if (i >= deno) {
        dp[i] = Math.min(dp[i], dp[i - deno] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
