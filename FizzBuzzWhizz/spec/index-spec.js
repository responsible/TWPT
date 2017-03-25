"use strict";

var judge = require("../index.js");

describe("fizzBuzz", ()=> {

  it("1", ()=> {
    expect(judge(1, [3, 5, 7])).toBe(1);
  });

  it("3", ()=> {
    expect(judge(3, [3, 5, 7])).toBe("Fizz");
  });

  it("5", ()=> {
    expect(judge(5, [3, 5, 7])).toBe("Buzz");
  });

  it("7", ()=> {
    expect(judge(7, [3, 5, 7])).toBe("Whizz");
  });

  it("13", ()=> {
    expect(judge(13, [3, 5, 7])).toBe("Fizz");
  });

  it("15", ()=> {
    expect(judge(15, [3, 5, 7])).toBe("FizzBuzz");
  });

  it("21", ()=> {
    expect(judge(21, [3, 5, 7])).toBe("FizzWhizz");
  });

  it("35", ()=> {
    expect(judge(35, [3, 5, 7])).toBe("Fizz");
  });

  it("105", ()=> {
    expect(judge(105, [3, 5, 7])).toBe("FizzBuzzWhizz");
  });

});