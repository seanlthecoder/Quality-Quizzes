
// This element will START the quiz
var continueButton = document.getElementById("start1");

// This element will display the main quiz page
var mainQuiz = document.getElementById("main-quiz");

//This element displays the entire HOME container
var homeSection = document.getElementById("home");

// this element displays the questions at the top of the page
var question = document.getElementById("question");

// id will match the array so the array value and the answer value matches, it means its right. When the user clicks on a button, I'm grabbing the id and checking it against the answer index
var optionOne = document.getElementById("0");
var optionTwo = document.getElementById("1");
var optionThree = document.getElementById("2");
var optionFour = document.getElementById("3");
var timerElement = document.getElementById("time");

// result element will tell us if its right or wrong.
var resultElement = document.getElementById("result");

var score =0;
var questionNumber = 0;
var timerObject;
var timeCount = 100;
var userQuestionsDB = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "A - JavaScript is complementary to and integrated with HTML.",
      "B - JavaScript is an open and cross-platform.",
      "C - Both of the above.",
      "D - All of the above.",
    ],
    answer: 2
  },

  {
    question: "Objects can contain objects as property values. True or false?",
    choices: ["A - True", "B - False", "C - NONE"],
    answer: 0
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
    answer: 0
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
    answer: 0
  },

  {
    question: "How can we access the property top-price of an object obj?",
    choices: [
      "A - bj.top-price",
      "B - obj['top-price']",
      "C - obj.accessProperty('top-price')",
      " D - Both a & b",
    ],
    answer: 1
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
    answer: 0
  },

  {
    question:
      "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
    choices: ["A - fixed()", "B - fontcolor()", "C - blink()", "D - bold()"],
    answer: 1
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "A - <script>",
      "B - <javascript>",
      "C - <scripting>",
      "D - <js>",
    ],
    answer: 0
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
    answer: 1
      
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "A - The <body> section",
      "B - The <head> section",
      "C - Both the <head> section and the <body> section.",
    ],
    answer: 2
  },
];

mainQuiz.style.display = "none";

function userQuestions() {
    question.textContent = userQuestionsDB[questionNumber].question
    optionOne.textContent = userQuestionsDB[questionNumber].choices[0]
    optionTwo.textContent = userQuestionsDB[questionNumber].choices[1]
    optionThree.textContent = userQuestionsDB[questionNumber].choices[2]
    optionFour.textContent = userQuestionsDB[questionNumber].choices[3]
    console.log(userQuestionsDB[questionNumber])
}




continueButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  mainQuiz.style.display = "block";
  timerObject = setInterval(function(){
    timerElement.textContent = timeCount;
    if(timeCount > 1){
        timeCount--
    }else{
        displayScore()
    }
  },1000)
  userQuestions()
});



function checkAnswer(){
    var userSelection = this.getAttribute("id")
    if(userSelection == userQuestionsDB[questionNumber].answer){
        score+= 10;
        resultElement.textContent = "Correct"
    }else{
        resultElement.textContent = "Wrong"
        timeCount -= 5;
    }
    if(questionNumber < userQuestionsDB.length-1){
        questionNumber++;
        userQuestions()
    }else{
        displayScore()
    }
}


function displayScore(){
  clearInterval(timerObject)
  mainQuiz.style.display = "none";


}

optionOne.addEventListener("click",checkAnswer)
optionTwo.addEventListener("click",checkAnswer)
optionThree.addEventListener("click",checkAnswer)
optionFour.addEventListener("click",checkAnswer)

/// Not yet included
// var backButton = document.getElementById("back-button");

// backButton.addEventListener("click", function () {
//     mainQuiz.style.display = "none";
//     homeSection.style.display = "block";



// });

// document.getElementById("questions").style.textAlign = "center";

// restartBtn.addEventListener("click", restart);
// nextBtn.addEventListener("click", next);
// submitBtn.addEventListener("click", submit);



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
