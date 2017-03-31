"use strict";

const Response = require("../response");
const Bar2ZipService = require("../service/bar2Zip");

class InvokeBar2ZipCommand {
  invoke(barcode) {
    let resp = new Bar2ZipService().convert(barcode);
    if (resp.code !== 0) {
      resp = new Response(resp.code, resp.data, {"*": InvokeBar2ZipCommand});
    } else {
      resp.reset = true;
    }
    return resp;
  }
}

module.exports = InvokeBar2ZipCommand;