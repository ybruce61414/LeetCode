// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    // swap 2 element
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    //update both the pointers
    right -= 1;
    left += 1;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
