"use strict";

const tools = require("../tools");

describe("tools", ()=> {
  describe("hasRepeatInNumber", ()=> {
    it("should print true", ()=> {
      expect(tools.hasRepeatInNumber(1123)).toBe(true);
    });

    it("should print false", ()=> {
      expect(tools.hasRepeatInNumber(1234)).toBe(false);
    })
  });

  describe("generateNonRepeatRandomNumber", ()=> {
    it("should return a non-repeat number", ()=> {
      var fakeRandomNumber = [0.4556, 0.1234, 0.1597], index = 0;
      spyOn(Math, "random").and.callFake(()=> {
        return fakeRandomNumber[index++];
      });
      expect(tools.generateNonRepeatRandomNumber(4)).toBe(1234);
    })
  })
});
