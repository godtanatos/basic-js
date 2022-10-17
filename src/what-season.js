const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let date1 = new Date(date).toString();
  if (date == null) {
    return 'Unable to determine the time of year!';
  } else {

    if (Object.prototype.toString.call(date) === "[object Date]" && !date.hasOwnProperty('toString')) {
      // it is a date

      if (isNaN(date.getMonth())) {

        throw new Error("Invalid date!");
      } else {

        switch (date.getMonth()) {
          case 11:
          case 0:
          case 1:
            return "winter";
            break;
          case 2:
          case 3:
          case 4:
            return "spring";
            break;
          case 5:
          case 6:
          case 7:
            return "summer";
            break;
          case 8:
          case 9:
          case 10:
            return "autumn"
            break;
          default:
            throw new Error("Invalid date!");
        }

      }
    }
    else {
      throw Error("Invalid date!");
    }

  }
}

module.exports = {
  getSeason
};
