class Queue {
  constructor() {
    this.queue = [];
  }
  get size() {
    return this.queue.length;
  }
  enqueue(insert) {
    this.queue.push(insert);
  }
  dequeue() {
    if (this.size === 0) return 0;
    return this.queue.shift();
  }
}

module.exports = Queue;
