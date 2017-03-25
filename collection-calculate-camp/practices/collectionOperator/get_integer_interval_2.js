'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  while (number_a > number_b) {
    result.push(number_a--);
  }
  while (number_a < number_b) {
    result.push(number_a++);
  }
  result.push(number_b);
  return result.filter((value, key) => {
      return value % 2 === 0;
    }
  );
}

module.exports = get_integer_interval_2;
