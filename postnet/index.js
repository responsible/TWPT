const Router = require("./router");
const readline = require("readline-sync");

let router = new Router();

function start(userInput) {
  let resp = router.go(userInput);
  console.log(resp.data);
  if (!resp.reset) {
    start(readline.question());
  } else {
    start();
  }
}

start();