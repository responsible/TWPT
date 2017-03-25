"use strict";

const guessNumber = require("../guessNumber");
const readlineSync = require('readline-sync');

describe("GuessNumber", ()=> {
  describe("Guess 1 time to win", ()=> {
    var guessNumber1;
    beforeEach(()=> {
      spyOn(readlineSync, "question").and.returnValue("1234");
      spyOn(Math, "random").and.returnValue(0.1234);
      guessNumber1 = new guessNumber(4);
    });

    it("should print win", ()=> {
      spyOn(console, "log");
      guessNumber1.start();
      expect(console.log).toHaveBeenCalledWith("4A0B");
      expect(console.log).toHaveBeenCalledWith("You win!");
    });

    it("printAnswer should run 1 time", ()=> {
      spyOn(guessNumber.prototype, "printAnswer");
      guessNumber1.start();
      expect(guessNumber1.printAnswer).toHaveBeenCalledTimes(1);
    });
  });

  describe("Guess all times and lose", ()=> {
    var guessNumber1, tryNumber = [1235, 1236, 1237, 1238, 1239, 1240], index;
    beforeEach(()=> {
      spyOn(readlineSync, "question").and.callFake(()=> {
        return tryNumber[index++];
      });
      spyOn(Math, "random").and.returnValue(0.1234);
      guessNumber1 = new guessNumber(4);
    });

    it("should print win", ()=> {
      index = 0;
      spyOn(console, "log");
      guessNumber1.start();
      expect(console.log).toHaveBeenCalledWith("3A0B");
      expect(console.log).toHaveBeenCalledWith("2A1B");
      expect(console.log).toHaveBeenCalledWith("You lose!");
    });

    it("printAnswer should run 6 times", ()=> {
      index = 0;
      spyOn(guessNumber.prototype, "printAnswer");
      guessNumber1.start();
      expect(guessNumber1.printAnswer).toHaveBeenCalledTimes(6);
    });
  });

  describe("Guess 3 times to win", ()=> {
    var guessNumber1, tryNumber = [1235, 1236, 1234, 1238], index;
    beforeEach(()=> {
      spyOn(readlineSync, "question").and.callFake(()=> {
        return tryNumber[index++];
      });
      spyOn(Math, "random").and.returnValue(0.1234);
      guessNumber1 = new guessNumber(4);
    });

    it("should print win", ()=> {
      index = 0;
      spyOn(console, "log");
      guessNumber1.start();
      expect(console.log).toHaveBeenCalledWith("3A0B");
      expect(console.log).toHaveBeenCalledWith("4A0B");
      expect(console.log).toHaveBeenCalledWith("You win!");
    });

    it("printAnswer should run 3 times", ()=> {
      index = 0;
      spyOn(guessNumber.prototype, "printAnswer");
      guessNumber1.start();
      expect(guessNumber1.printAnswer).toHaveBeenCalledTimes(3);
    });
  });
});