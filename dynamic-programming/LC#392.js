/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence0 = function (sequence, array) {
  // naive sol
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
};

function isValidSubsequence(array, sequence) {
  // Write your code here.
  if (sequence.length > array.length) return false;
  let pt1 = 0;

  for (let i = 0; i < sequence.length; i++) {
    let cur = sequence[i];
    let found = false;
    while (pt1 < array.length) {
      if (cur === array[pt1]) {
        pt1 += 1;
        found = true;
        break;
      }
      pt1 += 1;
    }

    if (!found) return false;
  }
  return true;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]));
