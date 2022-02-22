/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length);
  let monoStack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let currTemp = temperatures[i];

    while (
      monoStack.length > 0 &&
      temperatures[monoStack[monoStack.length - 1]] <= currTemp
    ) {
      monoStack.pop();
    }

    res[i] = monoStack.length > 0 ? monoStack[monoStack.length - 1] - i : 0;
    monoStack.push(i);
  }

  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([89, 62, 70, 58, 47, 76, 100]));
// [6,1,3,2,1,1,0]
