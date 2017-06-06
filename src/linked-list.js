class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    const node = {
      value: item,
      next: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    const current = this.head;
    this.head = current.next;
    return current.value;
  }
  contains(item) {
    let current = this.head;
    while (current.next) {
      if (current.value === item) return true;
      current = current.next;
    }
    return false;
    // return true; /* TODO: until then, any LinkedList contains the universe*/
  }
}

// blank = new LinkedList();
// blank.addToTail(1);
// console.log(blank.tail);

module.exports = LinkedList;
