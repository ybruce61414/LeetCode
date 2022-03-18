// 904. Fruit Into Baskets
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit0 = function (fruits) {
  //version1
  let map = {};
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < fruits.length) {
    map[fruits[right]] = (map[fruits[right]] || 0) + 1;

    while (Object.keys(map).length > 2) {
      map[fruits[left]] -= 1;
      if (map[fruits[left]] === 0) {
        delete map[fruits[left]];
      }
      left += 1;
    }

    max = Math.max(max, right - left + 1);
    right += 1;
  }

  return max;
};

var totalFruit = function (fruits) {
  //version2
  let map = new Map();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < fruits.length) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }
      left += 1;
    }

    max = Math.max(max, right - left + 1);
    right += 1;
  }

  return max;
};

// console.log(totalFruit([0, 1, 2, 2]));
// // 3
//
// console.log(totalFruit([1, 2, 3, 2, 2]));
// // 4
//
// console.log(totalFruit([1]));

let m = new Map();

m.set("a", 0).set("b", 0).set("c", 0);

m.delete("a");

console.log(m.size);
