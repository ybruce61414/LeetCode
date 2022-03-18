// 605. Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let amount = 0;
  flowerbed.push(0);
  flowerbed.unshift(0);

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }

    if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      amount += 1;
    }
  }

  return amount >= n;
};
