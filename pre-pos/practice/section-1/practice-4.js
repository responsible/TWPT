'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = [];
  collectionA.filter(value => {
    if (collectionB["value"].indexOf(value["key"]) != -1) {
      ans.push(value["key"]);
    }
  });
  return ans;
}
