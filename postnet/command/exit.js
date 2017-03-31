"use strict";

const Response = require("../response");

class ExitCommand {
  invoke() {
    process.exit();
  }
}

module.exports = ExitCommand;