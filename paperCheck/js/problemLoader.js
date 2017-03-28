function loadProblem(problems) {
  Object.keys(problems).forEach(problemClass=> {
    load(problemClass, problems[problemClass]);
  })
}

function load(problemClass, specificClassProblems) {
  let problemClasses = ["填空题", "选择题", "多选题", "判断题", "简答题"];
  let problemClassesSelector = ['.problem-fillin', '.problem-choice', '.problem-multi-choice', '.problem-true-false', '.problem-question'];
  let problemClassesHandler = [fillinData2DomHandler, choiceData2DomHandler, multiChoiceData2DomHandler, trueFalseData2DomHandler, questionData2DomHandler];

  let problemDom = document.querySelector(problemClassesSelector[problemClasses.indexOf(problemClass)]);

  problemDom.querySelector(".title").innerHTML = problemClass;

  specificClassProblems.forEach(problem=> {
    let problemLi = document.createElement("li");

    let problemDescription = document.createElement("span");
    problemDescription.innerHTML = problem["problem"];

    let answerArea = document.createElement("span");
    problemClassesHandler[problemClasses.indexOf(problemClass)](answerArea, problem);

    problemLi.appendChild(problemDescription);
    problemLi.appendChild(answerArea);

    problemDom.querySelector(".problem").appendChild(problemLi);
  })
}

function fillinData2DomHandler(answerArea, problem) {
  ansInput = document.createElement("input");
  ansInput.type = "text";
  ansInput.name = problem["id"];
  answerArea.appendChild(ansInput);
}

function choiceData2DomHandler(answerArea, problem) {
  problem["choice"].forEach(choiceElement=> {
    answerArea.innerHTML += `<input type=radio name=${problem["id"]}>${choiceElement}</input><br/>`;
  });
}

function multiChoiceData2DomHandler(answerArea, problem) {
  problem["choice"].forEach(choiceElement=> {
    answerArea.innerHTML += `<input type=checkbox name=${problem["id"]}>${choiceElement}</input><br/>`;
  });
}

function trueFalseData2DomHandler(answerArea, problem) {
  ansInput = document.createElement("input");
  ansInput.type = "checkbox";
  ansInput.name = problem["id"];
  answerArea.appendChild(ansInput);
}

function questionData2DomHandler(answerArea, problem) {
  ansInput = document.createElement("textarea");
  ansInput.name = problem["id"];
  answerArea.appendChild(ansInput);
}