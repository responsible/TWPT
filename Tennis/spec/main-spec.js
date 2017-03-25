var tennis = require("../tennis");

describe("tennis", () => {
  beforeEach(() => {
    tennis.init();
  });

  it('should print Love All', () => {
    expect(tennis.number2score()).toBe("Love All");
  });

  it('should print Love Fifteen', () => {
    tennis.addScoreToRight();
    expect(tennis.number2score()).toBe("Love Fifteen");
  });

  it('should print Fifteen Love', () => {
    tennis.addScoreToLeft();
    expect(tennis.number2score()).toBe("Fifteen Love");
  });

  it('should print Fifteen All', () => {
    tennis.addScoreToLeft();
    tennis.addScoreToRight();
    expect(tennis.number2score()).toBe("Fifteen All");
  });

  it('should print Fifteen Thirty', () => {
    tennis.addScoreToLeft();
    tennis.addScoreToRight();
    tennis.addScoreToRight();
    expect(tennis.number2score()).toBe("Fifteen Thirty");
  });

  it('should print Thirty Love', () => {
    tennis.addScoreToLeft();
    tennis.addScoreToLeft();
    expect(tennis.number2score()).toBe("Thirty Love");
  });

  it('should print Forty Love', () => {
    tennis.addScoreToLeft();
    tennis.addScoreToLeft();
    tennis.addScoreToLeft();
    expect(tennis.number2score()).toBe("Forty Love");
  });
});
