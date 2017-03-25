'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  while (number_a > number_b) {
    result.push(number_a--);
  }
  while (number_a < number_b) {
    result.push(number_a++);
  }
  result.push(number_b);
  return result;
}

module.exports = get_integer_interval;
