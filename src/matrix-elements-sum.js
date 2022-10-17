const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let numb = 0;
  const arrTemporary = [];
  for (let i = 0; i <= arr.length; i++) {
    arrTemporary.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arrTemporary[j][i] = arr[i][j];
    }
  }
  for (let i = 0; i < arrTemporary.length; i++) {
    for (let j = 0; j < arrTemporary[i].length; j++) {
      if (arrTemporary[i][j] === 0) {
        break;
      }
      numb += arrTemporary[i][j];
    }
  }

  return numb;
}

module.exports = {
  getMatrixElementsSum
};
