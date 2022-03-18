// 191. Number of 1 Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  let temp = n;

  while (temp) {
    temp = temp & (temp - 1);
    count += 1;
  }

  return count;
};

console.log(hammingWeight(00000000000000000000000000001011));
