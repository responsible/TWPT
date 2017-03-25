'use strict';

function countSameElements(collection) {
  var resultDict = {}, result = [];
  collection.forEach(value => {
    if (resultDict[value] != null) {
      resultDict[value] += 1;
    }
    else {
      resultDict[value] = 1;
    }
  });
  for (var item in resultDict) {
    result.push({"key": item, "count": resultDict[item]});
  }
  return result;
}
