"use strict";

const Response = require("../response");

class Zip2Bar {
  convert(zipCode) {
    if (zipCode && [5, 9, 10].indexOf(zipCode.length) != -1 && zipCode.replace("-", "").split("").every(digit=> {
          return !isNaN(parseInt(digit));
        })) {
      return new Response(0, "|||||||||||||||||||This is a bar code!||||||||||||||||||||");
    } else {
      return new Response(-1, "Please give right input");
    }
  }
}

module.exports = Zip2Bar;