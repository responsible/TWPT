"use strict";

const Response = require("../response");

class Bar2Zip {
  convert(barCode) {
    if (this.checkBarcodeValidation(barCode)) {
      return new Response(0, "--------------This is a zip code!------------------");
    } else {
      return new Response(-1, "Please give right input");
    }
  }

  checkBarcodeValidation(barcode) {
    return true;
  }
}

module.exports = Bar2Zip;