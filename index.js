//QUERYSELECTORS:
var questionInput = document.querySelector('.question-input');
var answerButton = document.querySelector('.answer-button');
var magicBallImg = document.querySelector('.eight-ball-img');
var questionText = document.querySelector('.question-text');
var answerText = document.querySelector('.answer-text');
var clearButton = document.querySelector('.clear-button');

//GLOBAL VARIABLES:
var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
var savedResults = [];

//EVENT LISTENERS:
answerButton.addEventListener('click', showResult)
clearButton.addEventListener('click', clearResult)
//FUNCTIONS/EVENT HANDLERS:

function randomizeNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function showResult() {
  event.preventDefault()
  if(questionInput.value === "") {
    answerButton.classList.add('disabled');
  } else {
    showQuestion()
    showAnswer()
  }
}

function showQuestion() {
  magicBallImg.style.display = "none";
  questionText.innerText = `"${questionInput.value}?"`
  questionText.style.display = "block";
  questionInput.value = null;
}

function showAnswer() {
  answerText.innerText = `${answers[randomizeNumber(answers)]}`;
  answerText.style.display = "block";
}

function clearResult() {
  answerText.style.display = "none"
  questionText.style.display = "none"
  magicBallImg.style.display = "block"
}
