// Palindrome Partitioning
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  const backtrack = (start, temp) => {
    if (start === s.length) {
      res =
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.substr(start, i+1))) {
        temp.push(s.substr(i, i+1))
        backtrack()
      }
    }
  };

  backtrack(0, []);
  return res;
};

console.log(partition("aab"));
// Output: [["a","a","b"],["aa","b"]]

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (right > left) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
};

console.log(isPalindrome(""));
