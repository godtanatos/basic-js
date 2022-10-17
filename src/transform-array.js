const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(ar) {
  if (!Array.isArray(ar)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  } else {
    let z = [];

    ar.map((a, b, c) => {
      if (Array.isArray(a)) {
        transform(a);
      }
      if (ar[b - 1] == "--discard-next") {
      }
      else if (a == "--discard-next") {
      }
      else if (a == "--discard-prev") {
        if (b == 0) { }
        else if (ar[b - 2] == "--discard-next") {
        }

        else { z.pop(); }
      }
      else if (a == "--double-next") {
        if (b == ar.length - 1) {
        } else { z.push(ar[b + 1]); }
      }
      else if (a == "--double-prev") {
        if (b == 0 || typeof (ar[b - 1]) == undefined) { }
        else if (ar[b - 2] == "--discard-next") { }
        else {
          z.push(z[z.length - 1])
        }
      }
      else { z.push(ar[b]) }
    })
    return z;
  }
}

module.exports = {
  transform
};
