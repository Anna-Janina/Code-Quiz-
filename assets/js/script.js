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

