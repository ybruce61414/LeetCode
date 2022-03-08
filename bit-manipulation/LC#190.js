// 190. Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits0 = function (n) {
  //better one
  let res = 0;
  let temp = n;

  for (let i = 0; i < 32; i++) {
    res = res * 2 + (temp % 2);
    temp = Math.trunc(temp / 2);
  }

  return res;
};

var reverseBits = function (n) {
  let res = 0;
  let temp = n;

  for (let i = 0; i < 32 && n > 0; i++) {
    res |= (temp & 1) << (31 - i);
    temp >>>= 1;
  }

  return res >>> 0;
};

// console.log(reverseBits(00000010100101000001111010011100));

console.log(reverseBits(5));
