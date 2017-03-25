'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((value) => {
      for (var i = 0; i < collectionB.length; i++) {
        if (collectionB[i].indexOf(value) != -1)
          return true;
      }
    }
  );
}
