class Stack {
  constructor() {
    this.arr = [];
  }
  get size() {
    return this.arr.length;
  }
  add(insert) {
    this.arr.push(insert);
  }
  remove() {
    if (this.size === 0) return 0;
    return this.arr.pop();
  }
  // size() {
  //   return this.arr.length;
  // }
}

module.exports = Stack;
