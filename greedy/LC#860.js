// 860. Lemonade Change
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    let cur = bills[i];

    switch (cur) {
      case 5:
        five += 1;
        break;
      case 10: {
        if (five === 0) return false;
        five -= 1;
        ten += 1;
        break;
      }

      case 20: {
        if (five === 0) {
          return false;
        } else if (ten === 0 && five < 3) {
          return false;
        } else if (ten > 0) {
          ten -= 1;
          five -= 1;
        } else if (ten === 0 && five >= 3) {
          five -= 3;
        }
        break;
      }
      default:
        break;
    }
  }

  return true;
};
