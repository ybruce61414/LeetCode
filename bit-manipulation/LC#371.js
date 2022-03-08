// 371. Sum of Two Integers
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  //need to figure out the negative num in js
  let res = a;
  let temp = b;

  while (temp !== 0) {
    let carry = (res & temp) << 1;
    res = res ^ temp;
    temp = carry;
    //console.log(res,temp)
  }

  return res;
};
console.log(getSum(1, 2));
