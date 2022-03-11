// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.data = [];
  this.reverse = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.reverse.length > 0) {
    this.data.push(this.reverse.pop());
  }

  this.data.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.data.length > 0) {
    this.reverse.push(this.data.pop());
  }

  return this.reverse.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.data.length > 0) return this.data[0];

  if (this.reverse.length > 0) return this.reverse[this.reverse.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.data.length === 0 && this.reverse.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
