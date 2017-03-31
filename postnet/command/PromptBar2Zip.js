"use strict";

const Response = require("../response");
const InvokeBar2Zip = require("./InvokeBar2Zip");

class PromptBar2ZipCommand {
  invoke() {
    return new Response(-1, "Please input bar code:", {"*": InvokeBar2Zip});
  }
}

module.exports = PromptBar2ZipCommand;