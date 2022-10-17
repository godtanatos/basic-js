const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let p = domains.map(elem => { return elem.split(".").reverse() })
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j <= p[i].length - 1; j++) {
      if (j == 0) {
        p[i][j] = "." + p[i][j]
      } else { (p[i][j] = p[i][j - 1] + "." + p[i][j]) }
    }
  }
  p = p.flat();
  const uniqeSet = new Set(p);
  const backToArray = Array.from(uniqeSet);
  console.log(backToArray);

  backToArray.forEach(elem => {
    obj[elem] = p.filter(e => {
      return elem == e ? true : false;
    }).length
  })
  return obj;
}

module.exports = {
  getDNSStats
};
