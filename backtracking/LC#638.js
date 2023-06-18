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

// method2: dp todo