var timeLeft = document.getElementById('#time-left');
var secondsLeft = document.getElementById('seconds-left');
var highScoreLink = document.getElementById('high-scores-link');
var quizQuestion = document.getElementById('quiz-question');
var answerElement = document.getElementById('answer-button');
var nextButton = document.getElementById('next-button');
var submitForm = document.getElementById('#submit-form');
var yourScore = document.getElementById('your-score');
var nameLabel = document.getElementById('name-label')
var startButtonQuiz = document.getElementById('start-btn');
var controls = document.getElementById('controls');
var currentQuestionIndex =0;
var time = questions.length * 15;
let timerId;
var questionTitle = document.querySelector('#controls .quiz-question');
var questionAnswer1 = document.querySelector('#button1');
var questionAnswer2 = document.querySelector('#button2');
var questionAnswer3 = document.querySelector('#button3');
var questionAnswer4 = document.querySelector('#button4');
var scoreContainer = document.querySelector('#score-container');
var highScore = document.querySelector('highscore');


// funct to start game
// funct to get each question
// funct to allow user to click on answer
// funct to start timer
// funct to end game


// Start button for the first question and next button to display
startButtonQuiz.addEventListener("click", startGame);
questionAnswer1.addEventListener("click", answerCicked);
questionAnswer2.addEventListener("click", answerCicked);
questionAnswer3.addEventListener("click", answerCicked);
questionAnswer4.addEventListener("click", answerCicked);

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++
//     nextQuestion()
// // Countdown 
// function secondsLeft() {
//     timeLeft--;
//     if (timeLeft <= 0) {
//         saveScore();
//     }  else {
//         gameOver('GAME OVER')
//     }
// };


// Start quiz
function startGame(){
    // after btn click, hide the home page
    // TODO add this id name when html has been refactored
    var homescreen = document.querySelector('.home-screen')
    homescreen.setAttribute('class', 'hide')

    // remobve hide class from questions
    controls.removeAttribute('class')
    timerId = setInterval(startClockTicking, 1000)
    secondsLeft.textContent = time
    askQuestion()
}

function askQuestion() {
    // add var to get the current question object from the questions array 
    var currentQuestion = questions[currentQuestionIndex]
    questionTitle.textContent = currentQuestion.question
    questionAnswer1.textContent = currentQuestion.answers[0];
    questionAnswer2.textContent = currentQuestion.answers[1];
    questionAnswer3.textContent = currentQuestion.answers[2];
    questionAnswer4.textContent = currentQuestion.answers[3];

    // for loop over the choices 
            // inside loop, create a btn for each choice, set text of buttonn as the choice, append choice to page 
}

function answerCicked(event) {
    var btnEl = event.target
    var currentQuestion = questions[currentQuestionIndex]
 if (currentQuestion.correctAnswer == btnEl.textContent) {
    time += 20000
 }
    if (time <= 0 || currentQuestionIndex >= questions.length - 1) {
        endGame()
    } else {
        currentQuestionIndex++
        askQuestion()
    }
}

function startClockTicking() {
    time--;
    secondsLeft.textContent = time

    if (time <= 0) {
        endGame()
    }
}

function endGame() {
    scoreContainer.classList.remove('hide')  
}

    

// Save score
function saveScore() {
localStorage.setItem('highscore', time);
}

startButtonQuiz.onClick = startGame




