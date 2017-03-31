"use strict";

const Response = require("../response");
const Zip2BarService = require("../service/zip2Bar");

class InvokeZip2BarCommand {
  invoke(zipcode) {
    let resp = new Zip2BarService().convert(zipcode);
    if (resp.code !== 0) {
      resp = new Response(resp.code, resp.data, {"*": InvokeZip2BarCommand});
    } else {
      resp.reset = true;
    }
    return resp;
  }
}

module.exports = InvokeZip2BarCommand;