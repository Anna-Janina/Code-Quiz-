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
var currentQuestionIndex;
var time = questions.length * 15;
let timerId;

// funct to start game
// funct to get each question
// funct to allow user to click on answer
// funct to start timer
// funct to end game


// Start button for the first question and next button to display
startButtonQuiz.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
});

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

    // start timer
    timerId = setInterval(startClockTicking, 1000)

    // dispaly time on poage

    secondsLeft.textContent = time

    askQuestion()
}

function askQuestion() {
    // add var to get the current question object from the questions array 

    // update ttile elemenrt with the current question 

    // for loop over the choices 
            // inside loop, create a btn for each choice, set text of buttonn as the choice, append choice to page 



}

function answerCicked(event) {
    var btnEl = event.target

    // check if answer was correct

    // take time away if user is wrong 

    // display new time on page 

    // chek if we javw run out of questions
    if (time <= 0) {
        endGame()
    } else {
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



// Next question   
function nextQuestion() {
    showQuestion(currentQuestionIndex);
}        


// Save score
function saveScore() {

}

startButtonQuiz.onClick = startGame


// function getTheAnswer() 

