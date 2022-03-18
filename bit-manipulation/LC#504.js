// 504. Base 7
var convertToBase7 = function (num) {
  let res = "";
  let temp = Math.abs(num);
  let neg = false;

  if (num < 0) {
    neg = true;
  } else if (num === 0) {
    return "0";
  }

  while (temp > 0) {
    res = (temp % 7) + res;
    temp = Math.floor(temp / 7);
  }

  return neg ? "-" + res : res;
};
