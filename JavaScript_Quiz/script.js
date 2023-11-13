const questions = [
    {
        question: "which is the largest animal in the world ?",
        answer: [
            {
                text: "shark", correct:false
            },
            {
                text: "blue whale", correct:true
            },
            {
                text: "elephant", correct:false
            },
            {
                text: "girafee", correct:false
            },
        ]
    },
    {
        question: "What is the capital city of France?",
        answer: [
            {
                text: "Berlin", correct: false
            },
            {
                text: "Madrid", correct: false
            },
            {
                text: "Rome", correct: false
            },
            {
                text: "Paris", correct: true
            }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: [
            {
                text: "Jupiter", correct: false
            },
            {
                text: "Mars", correct: true
            },
            {
                text: "Venus", correct: false
            },
            {
                text: "Saturn", correct: false
            }
        ]
    },
    {
    question: "Which famous scientist developed the theory of relativity?",
    answer: [
        {
            text: "Isaac Newton", correct: false
        },
        {
            text: "Albert Einstein", correct: true
        },
        {
            text: "Galileo Galilei", correct: false
        },
        {
            text: "Marie Curie", correct: false
        }
    ] 
    }
]

const question = document.querySelector("h2")
const answer = document.querySelector(".answer-button")
const next = document.querySelector(".next")
const container = document.querySelector(".container")

let current_index = 0
let score = 0

function startquiz() {
    current_index=0;
    score = 0;
    next.innerHTML = 'next';
    // console.log("hello");
    showquestion();
}

function showquestion() {
    resetopt()
    let currentquestion = questions[current_index]
    let questionNo = current_index +  1;
    question.innerHTML = `${questionNo} .  ${currentquestion.question}`
    currentquestion.answer.forEach(answer1=>{
        const button = document.createElement("button")
        button.innerHTML=`${answer1.text}`;
        button.classList.add("btn");
        answer.appendChild(button)
        // console.log(answer1.correct);
        if (answer1.correct) {
            // console.log(answer1.correct);
            // console.log(button);
            button.dataset.correct = answer1.correct
        }
        button.addEventListener('click',selectAnswer)
    })
}
function resetopt() {
    next.style.display = 'none'
    while (answer.firstChild) {
        answer.removeChild(answer.firstChild)
    }
}
function selectAnswer(e) {
    const selectedbtn = e.target;
    // console.log(selectedbtn.dataset.correct);
    const iscorrect = selectedbtn.dataset.correct ==='true';
    if (iscorrect) {
        selectedbtn.classList.add("correct")
        score++;
    } else {
        selectedbtn.classList.add("incorrect")
    }
    console.log(answer.children);
    Array.from(answer.children).forEach(e2 =>{
        console.log(e2);
        if (e2.dataset.correct ==='true') {
            e2.classList.add("correct")
            // console.log("yes ia m herhe");
        }
        e2.disabled = true
    })
    next.style.display = "block"
}
function restartgame() {
        
    resetopt()
    question.innerHTML = `you scored ${score} out of ${questions.length}`
    const play_again = document.createElement("button")
    play_again.classList.add("next")
    play_again.innerHTML="play again"
    container.appendChild(play_again)
    play_again.addEventListener('click',()=>{
        play_again.style.display ='none';
        startquiz()

    })

}
function nextquestion() {
    current_index++;
    if (current_index<questions.length) {
        showquestion()
    }
    else{
        restartgame()
    }
}
next.addEventListener("click",nextquestion)
startquiz()