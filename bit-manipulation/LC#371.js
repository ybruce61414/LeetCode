// 371. Sum of Two Integers
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  //need to figure out the negative num in js
  let res = a;
  let carry = b;

  while (carry !== 0) {
    //進位不是0才停止
    let temp = (res & carry) << 1;
    //計算是否進位

    res = res ^ carry;
    //計算不用盡位的部分

    carry = temp;
  }

  return res;
};

console.log(getSum(1, 2));
