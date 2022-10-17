const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  var stringArr = "-";
  var currenArray = [];

  for (let subArr of arr) {
    for (let elem of subArr) {
      currenArray.push(elem);
    }
  }
  stringArr += currenArray.join('-');
  let arrSumm;
  arrSumm = stringArr.match(/-\^\^/g);
  if (arrSumm == null) return 0
  return stringArr.match(/-\^\^/g).length;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
