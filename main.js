const quizData = [
    {
        question: 'Who was the JavaScript founder?',
        a : 'Richard Stallman',
        b: 'James Gosling', 
        c: 'Brendan Eich',
        d: 'Ken Thomson', 
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?', 
        a: 'Java', 
        b: 'Python', 
        c: 'JavaScript', 
        d: 'C', 
        correct: 'a'
    }, {
        question: 'How do you add a comment in a CSS file?', 
        a: '//this is a comment//', 
        b: '/*this is a comment*/', 
        c: '//this is a comment',
        d: '<!-- this is a comment -->', 
        correct: 'b'
    }, 
    {
        question: 'What does HTML stands for?',
        a: 'HyperText Markup Language', 
        b: 'Styling Style Sheet', 
        c: 'Jason Object Notation', 
        d: 'Application Programming Interface', 
        correct: 'a'
    }, 
    {
        question: 'What year was JavaScript launch?',
        a: '1996', 
        b: '1995', 
        c: '1997', 
        d: 'None of the above', 
        correct: 'b'
    }, 
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', ()=> {
    const answer = getSelected();
    console.log(answer)

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
            console.log("score",score)
        }
        currentQuiz++;        
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Play again</button>`
        }
    }

})