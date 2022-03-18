// 332. Reconstruct Itinerary
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function (tickets) {
//   const adjList = {};
//   const res = [];
//
//   // build adjList
//   for (let [src, dest] of tickets) {
//     if (!adjList[src]) adjList[src] = [];
//     adjList[src].push(dest);
//   }
//
//   //sort alphabetically
//   for (let src in adjList) {
//     adjList[src].sort();
//   }
//
//   const dfs = (currCity, used) => {
//     if (used === tickets.length) return true;
//
//     let nextCities = adjList[currCity];
//     if (!nextCities) return false;
//
//     for (let i = 0; i < adjList[currCity].length; i++) {
//       let next = adjList[currCity][i];
//       if (next === null) continue;
//
//       // mark next as null in adjList
//       adjList[currCity].splice(i, 1, null);
//       res.push(next);
//       if (dfs(next, used + 1)) {
//         return true;
//       } else {
//         adjList[currCity].splice(i, 1, next);
//         res.pop();
//       }
//     }
//   };
//
//   res.push("JFK");
//   dfs("JFK", 0);
//
//   return res;
// };

var findItinerary = function (tickets) {
  const adjList = {};
  const res = [];

  // build adjList
  for (let [src, dest] of tickets) {
    if (!adjList[src]) adjList[src] = [];
    adjList[src].push(dest);
  }

  //sort alphabetically
  for (let src in adjList) {
    adjList[src].sort();
  }

  const dfs = (currCity) => {
    const nextCities = adjList[currCity];
    while (nextCities && nextCities.length !== 0) {
      const next = nextCities.shift();
      dfs(next);
    }
    res.unshift(currCity);
  };

  dfs("JFK");

  return res;
};

console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ])
);

// console.log(
//   findItinerary([
//     ["JFK", "K"],
//     ["JFK", "NRT"],
//     ["NRT", "JFK"],
//   ])
// );

// let arr = ["a", "b", "c", "d"];
// for (let i = 0; i < arr.length; i++) {
//   arr.splice(i, 1);
//   console.log("---!-----", i);
//   console.log("---arr-----", arr);
// }
