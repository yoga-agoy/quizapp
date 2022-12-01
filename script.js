const quizData = [
    {
        question: "1. who is he prime minister of india 2022?",
        a: "Narendra modi",
        b: "Monmohan singh",
        c: "Soniya gandhi",
        d: "Draupathi murmu",
        correct: "a",
    },
    {
        question: "2. which programming language is best in 2020 ?",
        a: "Java",
        b: "Javascript",
        c: "Python",
        d: "C",
        correct: "b",
    },
    {
        question: "3. who invented a java ?",
        a: "Mark zuckerberg",
        b: "Guido van rossum",
        c: "James gosling",
        d: "dennis ritchie",
        correct: "c",
    },
    {
        question: "4. TCP full form ?",
        a: "Transmission control protocol",
        b: "Transmission content protocol",
        c: "Transmission connect protocol",
        d: "none of the above",
        correct: "a",
    }, {
        question: "5. How many years India won a cricket world cup ?",
        a: "1",
        b: "2",
        c: "3",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>sorry man better luck next time 😞 You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
            
            if (score) {
                if(score == '4'){
                    quiz.innerHTML = `
                    <h2>Justmissed 😯 You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
                }
                if(score == '3'){
                    quiz.innerHTML = `
                    <h2>Three next time you catch it keep going 😌 You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
                }
                if(score == '2'){
                    quiz.innerHTML = `
                    <h2>you got only two answer correct!😓 You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
                }
                if(score == '1'){
                    quiz.innerHTML = `
                    <h2>keep trying man don't lose your hope 😟 You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
                }
              
                if(score == '5'){
                    quiz.innerHTML = `
                    <h2>congratulations buddy 👏✨🎉👍 You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
                }
            }
        }
    }
});
