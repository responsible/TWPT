'use strict';

function countSameElements(collection) {
  var resultDict = {}, result = [];
  collection.forEach(value => {
    var ch = value, count = 1;
    if (value.indexOf("-") != -1) {
      [ch, count] = value.split("-");
      count = parseInt(count);
    }
    if (resultDict[ch] != null) {
      resultDict[ch] += count;
    }
    else {
      resultDict[ch] = count;
    }
  });
  for (var item in resultDict) {
    result.push({"key": item, "count": resultDict[item]});
  }
  return result;
}
