// Palindrome Partitioning
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  const backtrack = (start, temp) => {
    if (start === s.length) {
      res.push([...temp]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        backtrack(i + 1, temp);
        temp.pop();
      }
    }
  };

  backtrack(0, []);

  return res;
};

function isPalindrome(str, left, right) {
  console.log(left, right);
  while (right > left) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

console.log(partition("aab"));
// Output: [["a","a","b"],["aa","b"]]
