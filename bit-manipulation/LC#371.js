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
    let temp = (res & carry) << 1;
    res = res ^ carry;
    carry = temp;
    //console.log(res,temp)
  }

  return res;
};

console.log(getSum(1, 2));
