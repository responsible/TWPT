'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter((value)=> {
    return collection_a.indexOf(value) != -1;
  });
}

module.exports = get_intersection;
