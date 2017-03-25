'use strict';

function formatElement(elementStr) {
  var ch = elementStr.match(/\w+/)[0], count = 1;
  if (elementStr.match(/[[:-]/)) {
    count = parseInt(elementStr.match(/\d+/)[0]);
  }
  return {ch, count};
}

function countSameElements(collection) {
  var resultDict = {};
  collection.forEach(item => {
    const {ch, count} = formatElement(item);
    if (resultDict[ch] !== undefined) {
      resultDict[ch] += count;
    } else {
      resultDict[ch] = count;
    }
  });
  return calResultDict(resultDict);
}

function calResultDict(resultDict) {
  return Object.keys(resultDict).map(function (item) {
    return {"name": item, "summary": resultDict[item]};
  });
}
