/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, "")
    let left = 0;
    let right = s.length -1;

    while (right > left) {
        if (s[left] !== s[right]) return false;
        left += 1;
        right -=1;
    }
    return true
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))