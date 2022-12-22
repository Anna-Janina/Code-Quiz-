var startButtonQuiz = document.getElementById('start-btn');
var secondsLeft = document.getElementById('seconds-left');
var questionAnswer1 = document.querySelector('#button1');
var questionAnswer2 = document.querySelector('#button2');
var questionAnswer3 = document.querySelector('#button3');
var questionAnswer4 = document.querySelector('#button4');
var quizQuestion = document.getElementById('quiz-question');
var questionTitle = document.querySelector('#controls .quiz-question');
var submitForm = document.querySelector('#submit-form')
var timeLeft = document.getElementById('#time-left');
var highScore = document.querySelector('high-score');
var scoreContainer = document.querySelector('#score-container');
var currentQuestionIndex = 0;
var questionCount = 1;
var time = questions.length * 15;
let timerId;
var answerElement = document.getElementById('answer-button');
var submitForm = document.getElementById('#submit-form');
var yourScore = document.getElementById('your-score');
var nameLabel = document.getElementById('name-label')
var correctAnswer = document.querySelector('answer-button');


function startGame(){
    var homeScreen = document.querySelector('.home-screen')
    var controls = document.getElementById('controls');
    homeScreen.setAttribute('start-button', 'hide')
    controls.removeAttribute('class')
    timerId = setInterval(startClockTicking, 1000)
    secondsLeft.textContent = time
    askQuestion()
}

function hideButton(x) {
    x.style.display = 'none';
}

startButtonQuiz.onClick = startGame
startButtonQuiz.addEventListener("click", startGame);
questionAnswer1.addEventListener("click", answerClicked);
questionAnswer2.addEventListener("click", answerClicked);
questionAnswer3.addEventListener("click", answerClicked);
questionAnswer4.addEventListener("click", answerClicked);
submitForm.addEventListener("submit", saveToLocalStorage)

function askQuestion() {
    if(currentQuestionIndex < questions.length) {    
        var currentQuestion = questions[currentQuestionIndex]
    questionTitle.textContent = currentQuestion.question;
    questionAnswer1.textContent = currentQuestion.answers[0];
    questionAnswer2.textContent = currentQuestion.answers[1];
    questionAnswer3.textContent = currentQuestion.answers[2];
    questionAnswer4.textContent = currentQuestion.answers[3];
    }
}

function answerClicked(event) {
    var btnEl = event.target
    var currentQuestion = questions[currentQuestionIndex]
    if (time <= 0 || currentQuestionIndex >= questions.length) {
    endGame()
    }
    if (currentQuestion.correctAnswer != btnEl.textContent) {
    time -= 20
    }
    if (currentQuestion.correctAnswer == btnEl.textContent) {
    time += 20
    }
    currentQuestionIndex++;
    askQuestion();
    startClockTicking(); 
}

function startClockTicking() {
    saveToLocalStorage()
    time--;
    secondsLeft.textContent = time
    if (time <= 0) {
        endGame()
    }
    else if(questionCount >= questions.length) {
        clearInterval(timerId);
        endGame()
    }
}

function saveToLocalStorage() {
    var highScoreLink = JSON.parse(localStorage.getItem('score-container'));
    if (highScoreLink !== null) {
        highScore = nameLabel
    }
}

function endGame() {
    clearInterval(timerId);
    scoreContainer.classList.remove('hide')  
}

// Save score
function saveScore() {
localStorage.setItem('high-score', JSON.stringify(highScore)); 
}