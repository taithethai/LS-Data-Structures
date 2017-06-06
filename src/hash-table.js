/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, pair) {
    // const hashIndex = getIndexBelowMax(key, this.limit);
    // if (this.storage[hashIndex] === undefined) {
    //   this.storage[hashIndex] = [[key, pair]];
    //   return pair;
    // }
    // this.storage[hashIndex].push([key, pair]);
    // return pair;
    const index = getIndexBelowMax(key.toString(), this.limit);
    if (this.storage[index] === undefined) return this.storage.set(index, [[key, pair]]);
    this.storage[index].push([key, pair]);
  }
  remove(key) {
    // const hashIndex = getIndexBelowMax(key, this.limit);
    // this.storage[hashIndex].forEach((box, index) => {
    //   if (box[0] === key) {
    //     box[1] = null;
    //     return box[1];
    //   }
    // });
    const index = getIndexBelowMax(key.toString(), this.limit);
    // this.storage.set(index, null);
    const find = this.storage.get(index);
    find.forEach((item) => {
      if (item[0] === key) {
        item[1] = null;
        return item[1];
      }
    });
  }
  retrieve(key) {
    // const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    // this.storage[hashIndex].forEach((box, index) => {
    //   if (box[0] === key) {
    //     console.log(box[1]);
    //     const answer = box[1];
    //     return answer;
    //   }
    // });
    // find.forEach((item) => {
    //   if (item[0] === key) {
    //     item[1] = null;
    //     return item[1];
    //   }
    // }
    const index = getIndexBelowMax(key.toString(), this.limit);
    const find = this.storage.get(index);
    let blame;
    find.forEach((item) => {
      if (item[0] === key) {
        // return item[1];
        blame = item[1];
        // console.log((item[0] === key), 'item 0', item[0], 'key', key, 'blame', blame);
      }
    });
    // console.log(blame);
    return blame;
    // return blame;
    // return find[0][1];
  }
}

module.exports = HashTable;
