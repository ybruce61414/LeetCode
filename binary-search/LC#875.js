// 875. Koko Eating Bananas
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let maxPile = 0;

  for (let i = 0; i < piles.length; i++) {
    if (piles[i] > maxPile) maxPile = piles[i];
  }

  const feasible = (speed) => {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / speed);
    }
    return hours;
  };

  let left = 0;
  let right = maxPile;
  while (right > left) {
    let mid = Math.floor((left + right) / 2);

    if (feasible(mid) > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
