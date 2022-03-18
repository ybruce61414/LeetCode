// 134. Gas Station
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit0 = function (gas, cost) {
  // O(n^2)
  for (let i = 0; i < gas.length; i++) {
    if (cost[i] > gas[i]) continue;
    if (canReach(i, gas, cost)) return i;
  }
  return -1;
};

const canReach = (idx, gas, cost) => {
  let tank = gas[idx];
  for (let i = 0; i < gas.length; i++) {
    if (tank < cost[(idx + i) % gas.length]) return false;
    tank -= cost[(idx + i) % gas.length];
    tank += gas[(idx + i + 1) % gas.length];
  }

  return true;
};

var canCompleteCircuit = function (gas, cost) {
  let spare = 0;
  let minSpare = Infinity;
  let minIdx = null;

  for (let i = 0; i < gas.length; i++) {
    spare += gas[i] - cost[i];
    if (spare < minSpare) {
      minSpare = spare;
      minIdx = i;
    }
  }

  if (spare < 0) {
    return -1;
  } else {
    return (minIdx + 1) % gas.length;
  }
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
const gas1 = [2, 3, 4];
const cost1 = [3, 4, 3];
// console.log(canReach(3, gas, cost));
console.log(canCompleteCircuit(gas, cost));
console.log(canCompleteCircuit(gas1, cost1));
