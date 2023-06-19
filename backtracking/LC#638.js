/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */

// method1: dfs
var shoppingOffers = function(price, special, needs) {
  let min = Infinity;

  const dfs = (needs, tempPrice) => {
    for (const offer of special) {
      let valid = true;
      const newNeeds = [];

      for (let j = 0; j < needs.length; j++) {
        if (needs[j] < offer[j]) {
          valid = false;
          break;
        }
        newNeeds[j] = needs[j] - offer[j]
      }

      if (valid) {
        dfs(newNeeds, tempPrice + offer[offer.length - 1])
      }
    }

    let leftPrice = 0;
    for (let i = 0; i < needs.length; i++) {
      const curNeed = needs[i];
      leftPrice += curNeed * price[i];
    }

    min = Math.min(min, leftPrice + tempPrice)
  }

  dfs(needs, 0)

  return min;
};

// method2: pruning done
var shoppingOffers2 = function(price, special, needs) {
  const map = new Map();

  const dfs = (needs) => {
    const key = needs.join(',');

    if (map.has(key)) return map.get(key);

    let tempMin = Infinity;
    let finalMin = Infinity;

    for (const offer of special) {
      let valid = true;
      const newNeeds = [];

      for (let j = 0; j < needs.length; j++) {
        if (needs[j] < offer[j]) {
          valid = false;
          break;
        }
        newNeeds[j] = needs[j] - offer[j]
      }

      console.log('-newNeeds-', newNeeds)
      if (valid) {
        let leftTempPrice = 0;
        for (let i = 0; i < newNeeds.length; i++) {
          const curNeed = newNeeds[i];
          leftTempPrice += curNeed * price[i];
        }


        tempMin = Math.min(
          tempMin,
          offer[offer.length - 1] + leftTempPrice,
          offer[offer.length - 1] + dfs(newNeeds)
        )
      }
    }


    let leftPrice = 0;

    for (let i = 0; i < needs.length; i++) {
      const curNeed = needs[i];
      leftPrice += curNeed * price[i];
    }


    console.log('-yo-', tempMin, finalMin)
    finalMin = Math.min(tempMin, leftPrice)
    map.set(key, finalMin)


    return finalMin
  }

  return dfs(needs)
};
// memo: 不一定用禮包就會划算！

// expected: 2
console.log('-1-', shoppingOffers2([9,9], [[1,1,1]], [2,2]))
// expected: 6
// console.log('-2-', shoppingOffers2([3,4], [[1,2,3],[1,2,5]], [2,2]))