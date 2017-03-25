'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  while (number_a < number_b) {
    result.push(String.fromCharCode(96 + number_a++));
  }
  while (number_a > number_b) {
    result.push(String.fromCharCode(96 + number_a--));
  }
  result.push(String.fromCharCode(96 + number_b));
  return result;
}

module.exports = get_letter_interval;
