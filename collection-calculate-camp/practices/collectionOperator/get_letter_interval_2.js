'use strict';

function num2AlphaStr(num) {
  var result = "", cpNum = num;
  const BEFORE_A = 96;
  const ALPHA_NUM = 26;
  while (cpNum > ALPHA_NUM) {
    result = String.fromCharCode(BEFORE_A + Math.floor((cpNum - 1) / ALPHA_NUM));
    cpNum -= Math.floor((cpNum - 1) / ALPHA_NUM) * ALPHA_NUM;
  }
  result += String.fromCharCode(BEFORE_A + cpNum);
  return result;
}

function get_letter_interval_2(number_a, number_b) {
  var step = number_a < number_b ? 1 : -1;
  var length = Math.abs((number_b - number_a) / step);
  var result = new Array(length);
  var index = 0;
  while (length-- > -1) {
    result[index++] = num2AlphaStr(number_a);
    number_a += step;
  }
  return result;
}

module.exports = get_letter_interval_2;

//a   = 1   =         0*26 + 1
//z   = 26  =         0*26 + 26
//aa  = 27  =         1*26 + 1
//ab  = 28  =         1*26 + 2
//az  = 52  =         1*26 + 26
//ba  = 53  =         2*26 + 1
