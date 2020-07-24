//QUERYSELECTORS:
var questionInput = document.querySelector('.question-input');
var answerButton = document.querySelector('.answer-button');
var magicBallImg = document.querySelector('.eight-ball-img');
var questionText = document.querySelector('.question-text');
var answerText = document.querySelector('.answer-text');

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

//FUNCTIONS/EVENT HANDLERS:

function randomizeNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function showResult() {
  event.preventDefault()
  showQuestion()
  showAnswer()

  // get value of user input, replace inner text of h2, and make visible
  // randomize answer, replace inner text of h3 and make visible
  // hide 8 ball image
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
