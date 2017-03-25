'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = Object.assign(collectionA);
  objectB["value"].forEach(bValue => {
    result.find(aValue => {
      return aValue["key"] === bValue;
    }).count -= 1;
  });
  return result;
}
