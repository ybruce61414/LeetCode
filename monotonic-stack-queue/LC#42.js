// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap0 = function (height) {
  //  brute force
  let res = 0;

  //最兩端不用考慮，一定沒有水
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    let minOne;

    for (let j = i - 1; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j]);
    }

    for (let k = i + 1; k < height.length; k++) {
      maxRight = Math.max(maxRight, height[k]);
    }

    minOne = Math.min(maxLeft, maxRight);
    if (minOne > height[i]) {
      res += minOne - height[i];
    }
  }

  return res;
};

var trap1 = function (height) {
  //  improvement of brute force using dp
  let res = 0;
  let maxLeftDp = new Array(height.length).fill(0);
  let maxRightDp = new Array(height.length).fill(0);

  for (let i = 1; i < height.length; i++) {
    maxLeftDp[i] = Math.max(maxLeftDp[i - 1], height[i - 1]);
  }

  for (let j = height.length - 2; j >= 0; j--) {
    maxRightDp[j] = Math.max(maxRightDp[j + 1], height[j + 1]);
  }

  for (let k = 1; k < height.length - 1; k++) {
    let maxLeft = maxLeftDp[k];
    let maxRight = maxRightDp[k];
    let minOne = Math.min(maxLeft, maxRight);

    if (height[k] < minOne) {
      res += minOne - height[k];
    }
  }
  return res;
};

var trap = function (height) {
  // mono stack
  let monoStack = [];
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    while (
      monoStack.length !== 0 &&
      height[i] > height[monoStack[monoStack.length - 1]]
    ) {
      let top = monoStack.pop();

      if (monoStack.length === 0) break;
      let left = monoStack[monoStack.length - 1];
      let w = i - left - 1;
      let h = Math.min(height[i], height[left]) - height[top];
      res += w * h;
    }
    monoStack.push(i);
  }

  return res;
};

console.log(trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// 6
