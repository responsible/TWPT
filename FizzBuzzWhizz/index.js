"use strict";

const wordOfSpNums = ["Fizz", "Buzz", "Whizz"];

function judge(number, spNums) {
  var result = "";
  if (number.toString().indexOf(spNums[0].toString()) !== -1) {
    return wordOfSpNums[0];
  }
  spNums.forEach((spNum, index)=> {
    if (number % spNum === 0) {
      result += wordOfSpNums[index];
    }
  });
  return result === "" ? number : result;
}

module.exports = judge;