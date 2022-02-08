// 386. Longest Substring with At Most K Distinct Characters

const lengthOfLongestSubstringKDistinct = (s, k) => {
  let map = new Map();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left += 1;
    }

    max = Math.max(max, right - left + 1);
    right += 1;
  }
  return max;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
// 3
