var leftScore = 0, rightScore = 0;

var scoreMap = {
  "0": "Love",
  "15": "Fifteen",
  "30": "Thirty",
  "40": "Forty"
};

var tennis = {
  number2score () {
    if (leftScore === rightScore) {
      return scoreMap[leftScore] + " All";
    } else if (leftScore !== rightScore) {
      return scoreMap[leftScore] + " " + scoreMap[rightScore];
    }
  },
  addScoreToLeft () {
    if (leftScore === 30) {
      leftScore += 10;
    } else {
      leftScore += 15;
    }
  },
  addScoreToRight () {
    if (rightScore === 30) {
      rightScore += 10;
    } else {
      rightScore += 15;
    }
  },
  init () {
    leftScore = 0;
    rightScore = 0;
  }
};

module.exports = tennis;