"use strict";
const tools = require("./tools");
const numberJudger = require("./numberJudger");
const readlineSync = require('readline-sync');

class GuessNumber {
  constructor(digit) {
    this.tryCount = 0;
    this.maxTryCount = 6;
    this.digit = digit;
  }

  start() {
    var goalNum = tools.generateNonRepeatRandomNumber(this.digit), userNum, correctDegree;
    console.log("Game start!\n");
    while ((this.tryCount++ < this.maxTryCount) && (correctDegree !== `${this.digit}A0B`)) {
      userNum = readlineSync.question("input a 4 digits number: ");
      correctDegree = new numberJudger(goalNum, userNum).judge();
      this.printAnswer(correctDegree);
    }
  }

  printAnswer(correctDegree) {
    console.log(`${correctDegree}`);
    if (correctDegree === `${this.digit}A0B`) {
      console.log("You win!");
    } else if (this.tryCount < this.maxTryCount) {
      console.log(`${this.maxTryCount - this.tryCount} chances remain\n`);
    } else {
      console.log("You lose!")
    }
  }
}

module.exports = GuessNumber;
