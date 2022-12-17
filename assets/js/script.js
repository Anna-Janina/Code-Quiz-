var startButtonQuiz = document.getElementById('start-btn');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer')

// Add event listener to generate button
startButtonQuiz.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('start')
    
    currentQuestionIndex = 0
    nextQuestion()
}
// questionElement.classList.remove("hide")

function nextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function getTheAnswer() {

}

var questions = [
    {
        question: 'What does JS stands for?',
        answers: [
            { text: 'JavaScrip', yay: true},
            { text: 'No clue', nope: false},
            { text: 'Jil Sander', nope: false},
            { text: 'New show on Netflix', nope: false}
        ]
    }
]