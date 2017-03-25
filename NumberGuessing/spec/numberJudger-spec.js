"use strict";

const numberJudger = require("../numberJudger");

describe("number judge", ()=> {
  it("should print 0A0B", ()=> {
    expect(new numberJudger(1234, 5678).judge()).toBe("0A0B");
  });

  it("should print 0A2B", ()=> {
    expect(new numberJudger(1234, 5472).judge()).toBe("0A2B");
  });

  it("should print 0A4B", ()=> {
    expect(new numberJudger(1234, 4321).judge()).toBe("0A4B");
  });

  it("should print 2A0B", ()=> {
    expect(new numberJudger(6789, 6701).judge()).toBe("2A0B");
  });

  it("should print 2A2B", ()=> {
    expect(new numberJudger(6789, 6798).judge()).toBe("2A2B");
  });

  it("should print 4A0B", ()=> {
    expect(new numberJudger(4321, 4321).judge()).toBe("4A0B");
  });
});
