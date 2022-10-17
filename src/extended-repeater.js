const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let parametrs = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }
  let result = "";
  for (let key in options) {
    parametrs[key] = options[key];
  }
  for (let i = 0; i < parametrs.repeatTimes; ++i) {
    result += `${arguments[0]}`;
    for (let j = 0; j < parametrs.additionRepeatTimes; j++) {
      result += `${parametrs.addition}`;
      if (parametrs.additionRepeatTimes != 0) {
        if (parametrs.additionRepeatTimes > 1 && j < parametrs.additionRepeatTimes - 1) {
          result += `${parametrs.additionSeparator}`;
        }
      }
    }
    if (i < parametrs.repeatTimes - 1) { result += `${parametrs.separator}` }
  }
  return result;
}

module.exports = {
  repeater
};
