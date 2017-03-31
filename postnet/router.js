"use strict";

const menuCommand = require("./command/menu");
const PromptZip2BarCommand = require("./command/PromptZip2Bar");
const PromptBar2ZipCommand = require("./command/PromptBar2Zip");
const exitCommand = require("./command/exit");

class Router {
  constructor(mapping) {
    this.defaultMapping = {
      "1": PromptZip2BarCommand,
      "2": PromptBar2ZipCommand,
      "3": exitCommand,
      "*": menuCommand
    };
    this.currentState = mapping;
  }

  go(input) {
    let command = this.currentState || this.defaultMapping[input] || this.defaultMapping["*"];
    let resp = new command().invoke(input);
    this.currentState = resp.router ? resp.router["*"] : undefined;
    return resp;
  }
}

module.exports = Router;
