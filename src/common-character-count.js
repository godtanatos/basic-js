const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split('');
  let b1 = s2.split('')
  let curent;
  return a1.filter(x => {
    if (b1.includes(x)) {
      curent = x;
      b1.splice(b1.indexOf(curent), 1)
      return true;
    }
  }).length
}

module.exports = {
  getCommonCharacterCount
};
