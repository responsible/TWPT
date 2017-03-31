"use strict";

const Response = require("../response");
const InvokeZip2Bar = require("./InvokeZip2Bar");

class PromptZip2BarCommand {
  invoke() {
    return new Response(-1, "Please input zip code:", {"*": InvokeZip2Bar});
  }
}

module.exports = PromptZip2BarCommand;