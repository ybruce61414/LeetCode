// 274. H-Index
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let h = 0;
  let i = citations.length - 1;

  while (i >= 0 && citations[i] > h) {
    h += 1;
    i -= 1;
  }

  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([3, 3, 0, 6, 1, 5]));
console.log(hIndex([1, 5, 5, 5, 7, 10, 13]));
