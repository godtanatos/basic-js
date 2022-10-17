const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.arr.push('( )');
    }
    else {
      this.arr.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && ((position ^ 0) === position)) {
      if (position > 0 && position <= this.arr.length) {
        this.arr.splice(position - 1, 1)
      } else {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");

      }
      return this;
    }
    else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let p = this.arr.join('~~');
    this.arr = [];
    return p;
  }
};

module.exports = {
  chainMaker
};
