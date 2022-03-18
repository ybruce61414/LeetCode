//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function (height) {
  // brute force
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, area);
    }
  }
  return max;
};

var maxArea2 = function (height) {
  // two pointer (kind of like greedy method)
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (right > left) {
    const currArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currArea);

    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return maxArea;
};

console.log(maxArea2([4, 3, 2, 1, 4]));
