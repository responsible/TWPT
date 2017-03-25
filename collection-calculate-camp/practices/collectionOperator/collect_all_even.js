'use strict';

function collect_all_even(collection) {
  return collection.filter((value) => {
      return value % 2 === 0;
    }
  );
}

module.exports = collect_all_even;
