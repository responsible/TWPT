'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = collectionA.reduce((prev, value)=> {
    prev[value] = prev[value] + 1 || 1;
    return prev;
  }, {});
  objectB["value"].forEach(value => {
    result[value] -= Math.floor(result[value] / 3);
  });
  return Object.keys(result).map(element => {
    return {"key": element, "count": result[element]};
  });
}
