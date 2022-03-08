// 7. Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x >= 0;
  let res = 0;
  let temp = Math.abs(x);

  while (temp > 0) {
    res = res * 10 + (temp % 10);
    temp = Math.trunc(temp / 10);
  }

  res = sign ? res : -1 * res;
  if (res > 2 ** 31 || res < -1 * 2 ** 31) return 0;

  return res;
};

console.log(reverse(123));

console.log(reverse(-123));
