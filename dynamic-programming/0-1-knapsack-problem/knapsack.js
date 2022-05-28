//0-1 knapsack problem
// return maximum value you can carry

const weights1 = [1, 2, 3];
const values1 = [6, 10, 12];

const weights2 = [1, 4, 3, 1];
const values2 = [1500, 3000, 2000, 2000];

const knapsack = (weights, values, capacity) => {
  // create 2d dp array
  const dp = Array.from({ length: weights.length + 1 }, () =>
    new Array(capacity + 1).fill(0)
  );

  for (let col = 1; col <= capacity; col++) {
    for (let row = 1; row <= weights.length; row++) {
      let curVal =
        col - weights[row - 1] < 0
          ? 0
          : values[row - 1] + dp[row - 1][col - weights[row - 1]];
      dp[row][col] = Math.max(dp[row - 1][col], curVal);
    }
  }
  return dp;
};

console.log(knapsack(weights1, values1, 5));
console.log(knapsack(weights2, values2, 4));
