"use strict";
class NumberJudger {
  constructor(goalNum, userNum) {
    this.userNum = userNum;
    this.goalNum = goalNum;
  }

  excludeA(goalStr, userStr) {
    return [goalStr.split("").filter((digit, index)=> {
      return digit != userStr[index];
    }).join(""),
      userStr.split("").filter((digit, index)=> {
        return digit != goalStr[index];
      }).join("")];
  }

  excludeB(goalStr, userStr) {
    userStr = userStr.split("");
    userStr = userStr.map((digit)=> {
      if (goalStr.indexOf(digit) !== -1) {
        goalStr = goalStr.replace(digit, "");
        return "";
      }
      return digit;
    });
    return [goalStr, userStr.join("")];
  }

  judge() {
    var goalStr = String(this.goalNum), userStr = String(this.userNum),
        originNumLength = goalStr.length,
        aCount = 0,
        bCount = 0;
    [goalStr, userStr] = this.excludeA(goalStr, userStr);
    aCount = originNumLength - goalStr.length;
    [goalStr, userStr] = this.excludeB(goalStr, userStr);
    bCount = originNumLength - aCount - goalStr.length;
    return `${aCount}A${bCount}B`;
  }
}

module.exports = NumberJudger;
