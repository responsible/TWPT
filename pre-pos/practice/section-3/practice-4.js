'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var resultDictArray = charArray2DictArray(collectionA);
  objectB["value"].forEach(value => {
    var target = resultDictArray.find(item => {
      return item["key"] === value;
    });
    target.count -= Math.floor(target.count / 3);
  });
  return resultDictArray;
}

function charArray2DictArray(collection) {
  var result = [],
    resultDict = Object.assign(collection).reduce((prev, value) => {
      var ch = value, count = 1;
      if (value.indexOf("-") != -1) {
        [ch, count] = value.split("-");
        count = parseInt(count);
      }
      prev[ch] = prev[ch] + count || count;
      return prev;
    }, {});
  for (var item in resultDict) {
    result.push({"key": item, "count": resultDict[item]});
  }
  return result;
}
