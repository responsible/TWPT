function checkPaper(userAns) {
  let score = 0;
  Object.keys(problems).forEach(problemClass=> {
    score += specificClassChecker(problemClass, userAns[problemClass]);
  });
  return score;
}

function specificClassChecker(problemClass, specificClassUserAns) {
  let score = 0;
  problems[problemClass].forEach(problem=> {
    if (problem["answer"].toString() === specificClassUserAns.find(ans => {
          return ans["id"] === problem["id"]
        })["answer"].toString()) {
      score += problem["value"];
    }
  });
  return score;
}
