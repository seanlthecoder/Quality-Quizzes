var containerElement = document.querySelector('.container');

// This element will START the quiz
var continueButton = document.getElementById("start1");

// This element will display the main quiz page
var mainQuiz = document.getElementById("main-quiz");

//This element displays the entire HOME container
var homeSection = document.getElementById("home");

// this element displays the questions at the top of the page
var question = document.getElementById("question");

function endQuiz() {
  var theSCORE = document.getElementById("div");

  var nameEntry = document.createElement("input");

  var topSCORES = document.createElement("ul");

  var nameUserBox = document.createElement("div");

  var submitScoreButton = document.createElement("button");

  var localStorageScores = localStorage.getItem("Scores") || [];

  localStorageScores.forEach(function (SCORE) {
    var listElement = (document.createElement("li").textContent =
      SCORE.name + " " + SCORE.score);

    topSCORES.appendChild(listElement);
  });

  nameUserBox.appendChild(nameEntry);

  nameUserBox.appendChild(theSCORE);

  submitScoreButton.textContent = "submit";

  nameUserBox.appendChild(submitScoreButton);

  homeSection.appendChild(topSCORES);
  homeSection.appendChild(nameUserBox);





}

// var nameEntry = document.getElementById("name-entry")

// Google search 'how to create and append an html element so that you can add
// name entry to the html --- I may need to do this with an event listener farther down the code as oppose to up top

// id will match the array so the array value and the answer value matches, it means its right. When the user clicks on a button, I'm grabbing the id and checking it against the answer index
var optionOne = document.getElementById("0");
var optionTwo = document.getElementById("1");
var optionThree = document.getElementById("2");
var optionFour = document.getElementById("3");
var timerElement = document.getElementById("time");

// result element will tell us if its right or wrong.
var resultElement = document.getElementById("result");

// variable to keep the score
var score = 0;

// variable to show which question is currently displayed on the screen
var questionNumber = 0;

// variable for a timer to keep time
var timerObject;

//variable to hold the timer count down
var timeCount = 100;

// this variable will hold the array of questions
var userQuestionsDB = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "A - JavaScript is complementary to and integrated with HTML.",
      "B - JavaScript is an open and cross-platform.",
      "C - Both of the above.",
      "D - All of the above.",
    ],
    answer: 2,
  },

  {
    question: "Objects can contain objects as property values. True or false?",
    choices: ["A - True", "B - False", "C - NONE"],
    answer: 0,
  },

  {
    question:
      "Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
    choices: [
      "A - localeCompare()",
      "B - search()",
      "C - substr()",
      "D - concat()",
    ],
    answer: 0,
  },

  {
    question:
      "Which of the following is the literal way to create an object with a property x of value 10?",
    choices: [
      " A - {x: 10}",
      " B - new Object({x: 10})",
      "C - both a & b",
      " D - none",
    ],
    answer: 0,
  },

  {
    question: "How can we access the property top-price of an object obj?",
    choices: [
      "A - bj.top-price",
      "B - obj['top-price']",
      "C - obj.accessProperty('top-price')",
      " D - Both a & b",
    ],
    answer: 1,
  },

  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    choices: [
      "A - toLowerCase()",
      "B - toLower()",
      "C - changeCase(case)",
      "D - None of the above.",
    ],
    answer: 0,
  },

  {
    question:
      "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
    choices: ["A - fixed()", "B - fontcolor()", "C - blink()", "D - bold()"],
    answer: 1,
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "A - <script>",
      "B - <javascript>",
      "C - <scripting>",
      "D - <js>",
    ],
    answer: 0,
  },

  {
    question: `What is the correct JavaScript syntax to change the content of the HTML element?:
      <p id='demo'>Sean is Amazing.</p>`,

    choices: [
      "A - document.getElement('p').innerHTML = 'Hello World!';",
      "B - document.getElementById('demo').innerHTML = 'Hello World!';",
      "C - #demo.innerHTML = 'Hello World!';",
      "D - document.getElementByName('p'.innerHTML = 'Hello World!';",
    ],
    answer: 1,
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "A - The <body> section",
      "B - The <head> section",
      "C - Both the <head> section and the <body> section.",
    ],
    answer: 2,
  },
];

mainQuiz.style.display = "none";

// display the current question and the answer choices for each question
function userQuestions() {
  console.log("UserQuestion Test");
  question.textContent = userQuestionsDB[questionNumber].question;
  optionOne.textContent = userQuestionsDB[questionNumber].choices[0];
  optionTwo.textContent = userQuestionsDB[questionNumber].choices[1];
  optionThree.textContent = userQuestionsDB[questionNumber].choices[2];
  optionFour.textContent = userQuestionsDB[questionNumber].choices[3];
  console.log(userQuestionsDB[questionNumber]);
}

// start button is clicked it hides the home section and displays the main quiz page
continueButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  mainQuiz.style.display = "block";
  timerObject = setInterval(function () {
    timerElement.textContent = timeCount;
    if (timeCount > 1) {
      timeCount--;
    } else {
      displayScore();
    }
  }, 1000);
  userQuestions();
});

// on click event listeners to check the answer and go on to the next question. id will match the array index so the array value and the answer value matches, it means its right.
function checkAnswer() {
  var userSelection = this.getAttribute("id");
  if (userSelection == userQuestionsDB[questionNumber].answer) {
    score += 10;
    console.log(score);
    resultElement.textContent = "Correct";
  } else {
    resultElement.textContent = "Wrong";
    timeCount -= 5;
  }
  if (questionNumber < userQuestionsDB.length - 1) {
    questionNumber++;
    userQuestions();
  } else {
    displayScore();
  }
}

// funtion declarations are hoisted and I believe can be below where they are used as long its not called immeditately when the page loads. This function hides that main page and displays the score.
function displayScore() {
  console.log("displayCode");
  clearInterval(timerObject);
  // clearInterval clears the timer
  mainQuiz.style.display = "none";
  // mainQuiz hides the main page.
  homeSection.style.display = 'block';
  // theSCORE.textContent = score;
  endQuiz()

}

// when a choice is selected by click, the checkAnswer function is executed.
optionOne.addEventListener("click", checkAnswer);
optionTwo.addEventListener("click", checkAnswer);
optionThree.addEventListener("click", checkAnswer);
optionFour.addEventListener("click", checkAnswer);

topSCORES.addEventListener("submit", function handleClick(event) {});

topSCORES.setAttribute("id", "top-scores");

topSCORES.textContent = "TOP SCORES";

topSCORES.appendChild("div");

//create event listener for top score button. id = High-Scores
// with this event listener I want to display all scores and have a place for the user to type in their name and submit. We want to get the LOCAL STORAGE and display it.
// Here is where I need to get local storage.
// Handle what happens if local storage is empty. EX: creating an if statement to get the local storage otherwise if will throw an error if empty. If its empty and i get it, i dont want to parse it and put in HTML. It will error out... Else console log if empty etc...
//Here is where I need to PARSE local storage.
// Here is where i need to create an element to display the local storage. Create a div or a container....
// do this in the javascript - create an append to HTML
// Create HTML element within javascript
// I need an input field to type in the name
//I need a button to submit the name.
//I need an event listener for the submit button that adds it to local storage.

// create event listener for submit button
// submit button adds everything to local storage and calls restart function.
// with this event listener I want to set local storage. Create an element to display local storage, if it's there, add name to storage....

/// Not yet included
// var backButton = document.getElementById("back-button");

// submit.addEventListener("click", function () {
//     mainQuiz.style.display = "none";
//     homeSection.style.display = "block";

// });

// document.getElementById("questions").style.textAlign = "center";

// restartBtn.addEventListener("click", restart);
// nextBtn.addEventListener("click", next);
// submitBtn.addEventListener("click", submit);

// This would ideally restart the quiz by calling the initial startQuiz function...

// function restart() {
//     currentQuestion = 0;
//     backButton.classList.remove('hide');
//     nextBtn.classList.remove('hide');
//     submitBtn.classList.remove('hide');
//     trueBtn.classlist.remove('hide');
//     falseBtn.classlist.remove('hide');
//     score = 0;
//     userScore.innerHTML = score;
//     startQuiz();
// }

// commented these out because I already have them created.

// var questionsElement = document.createElement("h3");
// var firstAnswer = document.createElement("button");
// var secondAnswer = document.createElement("button");
// var thirdAnswer = document.createElement("button");
// var fourthAnswer = document.createElement("button");

// function startQuiz() {
//   homeSection.classList.add("hidden");
//   questionsElement.setAttribute("id", "questions");
//   firstAnswer.setAttribute("id", "first-answer");
//   secondAnswer.setAttribute("id", "second-answer");
//   thirdAnswer.setAttribute("id", "third-answer");
//   fourthAnswer.setAttribute("id", "fourth-answer");
//   questionsElement.textContent = "Question 1";
//   firstAnswer.textContent = "AnswerContent1";
//   secondAnswer.textContent = "AnswerContent2";
//   thirdAnswer.textContent = "AnswerContent3";
//   fourthAnswer.textContent = "AnswerContent4";
//   mainQuiz.appendChild(questionsElement);
//   mainQuiz.appendChild(firstAnswer);
//   mainQuiz.appendChild(secondAnswer);
//   mainQuiz.appendChild(thirdAnswer);
//   mainQuiz.appendChild(fourthAnswer);
// }
