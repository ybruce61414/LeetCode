// 1011. Capacity To Ship Packages Within D Days
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let maxWeight = 0;
  let maxEle = 0;

  for (let i = 0; i < weights.length; i++) {
    maxWeight += weights[i];
    if (weights[i] > maxEle) maxEle = weights[i];
  }

  let left = maxEle;
  let right = maxWeight;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (feasible(weights, mid) > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const feasible = (weights, k) => {
  let days = 0;
  let temp = 0;

  for (let weight of weights) {
    temp += weight;
    if (temp > k) {
      days += 1;
      temp = weight;
    }
  }
  return days + 1;
};

// console.log(feasible([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
// console.log(feasible([3, 2, 2, 4, 1, 4], 6));
// console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(shipWithinDays([1, 2, 3, 4, 5, 6], 6));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
