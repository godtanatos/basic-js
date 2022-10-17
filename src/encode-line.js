const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.length != 0 ? str.match(/(.)\1{0,}/gi).map((elem) => { return elem.length > 1 ? elem.length + elem.substr(0, 1) : elem }).join("") : "";
}

module.exports = {
  encodeLine
};
