// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  const map1 = new Map();
  map1.set("I", 1);
  map1.set("V", 5);
  map1.set("X", 10);
  map1.set("L", 50);
  map1.set("C", 100);
  map1.set("D", 500);
  map1.set("M", 1000);

  for (let i = 0; i < s.length; i++) {
    if (
      map1.get(s[i]) < map1.get(s[i + 1]) &&
      map1.get(s[i + 1]) !== undefined
    ) {
      res -= map1.get(s[i]);
    } else {
      res += map1.get(s[i]);
    }
  }

  return res;
};

console.log(romanToInt("III"));
// 3

console.log(romanToInt("LVIII"));
// 58

console.log(romanToInt("MCMXCIV"));
// 1994
