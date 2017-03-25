'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = Object.assign(collectionA);
  objectB["value"].forEach(bValue => {
    var target = result.find(aValue => {
      return aValue["key"] === bValue;
    });
    target.count -= Math.floor(target.count / 3);
  });
  return result;
}
