const Response = require("../response");

class menuCommand {
  invoke() {
    let menu = `1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3)`;
    return new Response(0, menu);
  }
}

module.exports = menuCommand;