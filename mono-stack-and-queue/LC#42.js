// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
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

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// 6
