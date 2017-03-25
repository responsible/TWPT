'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((value) => {
    return collectionB.indexOf(value) != -1;
  })
}
