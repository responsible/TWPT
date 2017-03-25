'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((value) => {
      return collectionB["value"].indexOf(value) != -1;
    }
  );
}
