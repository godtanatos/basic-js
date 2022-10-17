const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  constructor(type) {
    if (arguments.length == 0) {
      this.typeMachine = true
    } else {
      this.typeMachine = type;
    }
  }
  encrypt(message, key) {
    if ([...arguments].filter(e => { return typeof e === 'string' }).length != 2) {
      throw Error("Incorrect arguments!")
    }
    if (this.typeMachine == false) {
      message = message.split('').reverse().join('');
    }
    let count = 0;
    const result = [];
    let p = message.toLowerCase().split("").map((elem, i) => {
      return (this.arr_en.indexOf(elem) != -1 ? this.arr_en.indexOf(elem) + 1 : `${elem}`)
    })
    p.forEach((element) => {
      if (typeof (element) == 'number') {
        if (count >= key.length) {
          count = 0
        }
        result.push(this.arr_en[(element + this.arr_en.indexOf(key[count].toLowerCase()) - 1) % 26])
        count++

      } else { result.push(element) }
    })
    return result.join("").toUpperCase();

  }
  decrypt(message, key) {
    if ([...arguments].filter(e => { return typeof e === 'string' }).length != 2) {
      throw Error("Incorrect arguments!")
    }
    let count = 0;
    const result = [];
    if (this.typeMachine == false) {
      message = message.split('').reverse().join('');
    }
    let p = message.toLowerCase().split("").map((elem, i) => {
      return (this.arr_en.indexOf(elem) != -1 ? this.arr_en.indexOf(elem) + 1 : `${elem}`)
    })
    p.forEach((element) => {
      if (typeof (element) == 'number') {
        if (count >= key.length) {
          count = 0
        }
        result.push(this.arr_en[((element - this.arr_en.indexOf(key[count].toLowerCase()) - 1) < 0 ?
          element - this.arr_en.indexOf(key[count].toLowerCase()) + 25 :
          element - this.arr_en.indexOf(key[count].toLowerCase()) - 1
        ) % 26])
        count++

      } else { result.push(element) }
    })
    return result.join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
