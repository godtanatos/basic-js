const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof (sampleActivity) == "string"
    && !isNaN(Number(sampleActivity))
    && !(sampleActivity.trim() == '')
    && 15.1 > Number(sampleActivity)
    && Number(sampleActivity) > 0) {
    let sampleActivityIntager = sampleActivity;
    let k1 = (0.693 / HALF_LIFE_PERIOD);
    let time1 = Math.log(MODERN_ACTIVITY / sampleActivityIntager);
    return (Math.ceil((time1 / k1)));
  }
  else { return false; }
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
