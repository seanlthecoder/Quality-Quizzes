var userQuestions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "A - JavaScript is complementary to and integrated with HTML.",
      "B - JavaScript is an open and cross-platform.",
      "C - Both of the above.",
      "D - All of the above.",
    ],
    Answer: "C - Both of the above.",
  },

  {
    question: "Objects can contain objects as property values. True or false?",
    choices: ["A - True", "B - False", "C - NONE"],
    answer: "True",
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
    answer: "A - localeCompare()",
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
    answer: " Answer - A -{x: 10}",
  },

  {
    question: "How can we access the property top-price of an object obj?",
    choices: [
      "A - bj.top-price",
      "B - obj['top-price']",
      "C - obj.accessProperty('top-price')",
      " D - Both a & b",
    ],
    answer: "B - obj['top-price']",
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
    answer: "Answer - A - toLowerCase()",
  },

  {
    question:
      "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
    choices: ["A - fixed()", "B - fontcolor()", "C - blink()", "D - bold()"],
    answer: "B fontcolor()",
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "A - <script>",
      "B - <javascript>",
      "C - <scripting>",
      "D - <js>",
    ],
    answer: "A <script>",
  },

  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?" /
      "<p id='demo'>Sean is Amazing.</p>",

    choices: [
      "A - document.getElement('p').innerHTML = 'Hello World!';",
      "B - document.getElementById('demo').innerHTML = 'Hello World!';",
      "C - #demo.innerHTML = 'Hello World!';",
      "D - document.getElementByName('p'.innerHTML = 'Hello World!';",
    ],
    answer:
      "Answer B - document.getElementById('demo').innerHTML = 'Hello World!';",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "A - The <body> section",
      "B - The <head> section",
      "C - Both the <head> section and the <body> section.",
    ],
    answer: "C - Both the <head> section and the <body> section are correct. ",
  },
];

var homeSection = document.getElementById("home");
var continueButton = document.getElementById("continue1");
var questionsElement = document.createElement("h3");
var firstAnswer = document.createElement("button");
var secondAnswer = document.createElement("button");
var thirdAnswer = document.createElement("button");
var fourthAnswer = document.createElement("button");
var mainQuiz = document.getElementById("main-quiz");

function startQuiz() {
  homeSection.classList.add("hidden");
  questionsElement.setAttribute("id", "questions");
  firstAnswer.setAttribute("id", "first-answer");
  secondAnswer.setAttribute("id", "second-answer");
  thirdAnswer.setAttribute("id", "third-answer");
  fourthAnswer.setAttribute("id", "fourth-answer");
  questionsElement.textContent = "Question 1";
  firstAnswer.textContent = "AnswerContent1";
  secondAnswer.textContent = "AnswerContent2";
  thirdAnswer.textContent = "AnswerContent3";
  fourthAnswer.textContent = "AnswerContent4";
  mainQuiz.appendChild(questionsElement);
  mainQuiz.appendChild(firstAnswer);
  mainQuiz.appendChild(secondAnswer);
  mainQuiz.appendChild(thirdAnswer);
  mainQuiz.appendChild(fourthAnswer);
}

function userQuestions() {
  let questionsElement;
}

var mainQuiz = document.getElementById("main-quiz");
var backButton = document.getElementById("back-button");

continueButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  mainQuiz.style.display = "block";
});

backButton.addEventListener("click", function () {
    mainQuiz.style.display = "none";
    homeSection.style.display = "block";



})