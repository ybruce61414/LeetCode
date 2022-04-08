// 743. Network Delay Time
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let res = new Array(n).fill(-1);
  let max = -1;
  const pq = new PQ();

  pq.enqueue(k, 0);

  while (!pq.isEmpty()) {
    let deq = pq.dequeue();
    let { name, prio } = deq;
    let neighbors = times.filter((item) => item[0] === name);

    if (res[parseInt(name) - 1] === -1) {
      res[parseInt(name) - 1] = prio;
      for (let neighbor of neighbors) {
        pq.enqueue(neighbor[1], prio + neighbor[2]);
      }
    }
  }

  for (let ele of res) {
    if (ele === -1) return -1;
    max = Math.max(max, ele);
  }

  return max;
};

class PQ {
  constructor() {
    this.values = [];
  }

  enqueue(name, prio) {
    this.values.push({ name, prio });
    this._sort();
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }

  _sort() {
    this.values.sort((a, b) => a.prio - b.prio);
  }
}
