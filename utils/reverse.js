function twoNumberSum(array, targetSum) {
  // Write your code here.
  let hashMap = new Map();

  for (let i = 0; i < array.length; i++) {
    let cur = array[i];
    console.log(hashMap, cur);
    if (hashMap.has(targetSum - cur)) {
      return [targetSum - cur, cur];
    } else {
      hashMap.set(cur, targetSum - cur);
    }
  }

  return [];
}

function isValidSubsequence(array, sequence) {
  // Write your code here.
  if (array.length < sequence.length) return false;
  let cur = -Infinity;

  for (let num of sequence) {
    let origin = cur;
    for (let i = cur === -Infinity ? 0 : cur + 1; i < array.length; i++) {
      if (array[i] === num) {
        if (i > cur) {
          cur = i;
          break;
        }
        return false;
      }
    }
    if (cur === origin) return false;
  }

  return true;
}

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10])
);
