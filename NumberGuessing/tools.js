"use strict";

class Tools {
  static generateNonRepeatRandomNumber(digit) {
    var result = 0;
    do {
      result = parseInt(Math.random() * Math.pow(10, digit));
    } while (this.hasRepeatInNumber(result));
    return result;
  }

  static hasRepeatInNumber(number) {
    var numStr = String(number);
    for (var num = 0; num < 10; num++) {
      numStr = numStr.replace(String(num), "");
    }
    return numStr.length !== 0;
  };
}

module.exports = Tools;
