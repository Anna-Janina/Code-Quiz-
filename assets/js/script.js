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
var choiceButtons = document.querySelector('answer-button');


// Start button for the first question and next button to display
startButtonQuiz.addEventListener("click", startGame);
questionAnswer1.addEventListener("click", answerClicked);
questionAnswer2.addEventListener("click", answerClicked);
questionAnswer3.addEventListener("click", answerClicked);
questionAnswer4.addEventListener("click", answerClicked);

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
    var homescreen = document.querySelector('.home-screen')
    homescreen.setAttribute('start-button', 'hide')
    // remobve hide class from questions
    controls.removeAttribute('class')
    timerId = setInterval(startClockTicking, 1000)
    secondsLeft.textContent = time
    askQuestion()
}

function askQuestion() {
    // add var to get the current question object from the questions array 
    if(currentQuestionIndex < questions.length)
{    var currentQuestion = questions[currentQuestionIndex]
    questionTitle.textContent = currentQuestion.question;
    questionAnswer1.textContent = currentQuestion.answers[0];
    questionAnswer2.textContent = currentQuestion.answers[1];
    questionAnswer3.textContent = currentQuestion.answers[2];
    questionAnswer4.textContent = currentQuestion.answers[3];
}

    // for loop over the choices 
            // inside loop, create a btn for each choice, set text of buttonn as the choice, append choice to page 
}

function answerClicked(event) {
    var btnEl = event.target
    var currentQuestion = questions[currentQuestionIndex]
//  if (currentQuestion.correctAnswer == btnEl.textContent) {
//     time += 20
//  }
if (time <= 0 || currentQuestionIndex >= questions.length) {
    endGame()
}
 if (currentQuestion.correctAnswer != btnEl.textContent) {
    time -= 20
 }
    currentQuestionIndex++;
    askQuestion();
}

// var currentAnswer;

// function askQuestion() {
//     currentAnswer = questions[currentQuestionIndex].answers;
//     questionTitle.textContent = questions[currentQuestionIndex].question;


//     for (var i = 0; i < choiceButtons.length; i++){ // loop to display choices
//         choiceButtons[i].textContent = questions[currentQuestionIndex].answer[i];
//     }
//     if (currentQuestionIndex == 4) { // if last question, end quiz
//         gameOver() // function to end quiz
//         clearInterval(timerInterval);
//     }}


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