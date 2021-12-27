// 506. Relative Ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let scoreMap = {};
  let sortedScore = [...score];

  sortedScore.sort((a, b) => b - a);

  for (let i = 0; i < sortedScore.length; i++) {
    let prop = sortedScore[i];
    switch (i) {
      case 0:
        scoreMap[prop] = "Gold Medal";
        break;
      case 1:
        scoreMap[prop] = "Silver Medal";
        break;
      case 2:
        scoreMap[prop] = "Bronze Medal";
        break;
      default:
        scoreMap[prop] = (i + 1).toString();
        break;
    }
  }

  for (let i = 0; i < score.length; i++) {
    score[i] = scoreMap[score[i]];
  }

  return score;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
// expected: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
// expected: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
