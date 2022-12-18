var questions = [
    {
        question: 'What does JS stands for?',
        answers: [
            { text: 'JavaScrip', yay: true},
            { text: 'No clue', nope: false},
            { text: 'Jil Sander', nope: false},
            { text: 'New show on Netflix', nope: false}
        ]
    },
    {
        question: 'What is Python?',
        answers: [
            { text: 'Dangerous snake', nope: false},
            { text: 'Programming language', yay: true},
            { text: 'Cute snake', nope: false},
            { text: 'Fancy shoe brand', nope: false}
        ]
    }, 
    {
        question: 'HTML stands for?',
        answer: [
            { text: 'Hyper Text Makeup Lipstick', nope: false},
            { text: 'Hyper Text Mouth Language', nope: false},
            { text: 'Hyper Text Markup Language', yay: true},
            { text: 'Hyper Text Moschino Label', nope: false}
        ]
    },
    {
        question: 'CSS stands for?',
        answer: [
            { text: 'Caroline Snake Shoes', nope: false},
            { text: 'Christian Slater Son', nope: false},
            { text: 'No idea', nope: false},
            { text: 'Cascading Style Sheets', yay: true}
        ]
    }
]

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
var currentQuestionIndex;
var shuffledQuestions;


// Start button for the first question and next button to display
startButtonQuiz.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
});

// Countdown 
function secondsLeft() {
    timeLeft--;
    if (timeLeft <= 0) {
        saveScore();
    }  else {
        gameOver('GAME OVER')
    }
};


// Start quiz
function startGame(){
    timeLeft = setTimeout(secondsLeft, 4000);
    shuffledQuestions = questions.sort(() => Math.random() * secondsLeft.length)
    currentQuestionIndex = 0
    return yourScore
    
}


             
// Next question   
function nextQuestion() {
    showQuestion(currentQuestionIndex);
}        


// Save score
function saveScore() {

}




// function getTheAnswer() 

