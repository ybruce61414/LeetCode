// 744. Find Smallest Letter Greater Than Target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetterLinear = function (letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (target >= letters[i] && letters[i + 1] && target < letters[i + 1]) {
//       return letters[i + 1];
//     }
//   }
//   return letters[0];
// };

var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left === letters.length ? letters[0] : letters[left];
};

console.log(nextGreatestLetter(["a", "b"], "z"));
// output:a
console.log(nextGreatestLetter(["c", "f", "j"], "a"));
// output:c
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
// output:f
console.log(nextGreatestLetter(["c", "f", "j"], "d"));
// output:f
