const responses = ["b", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector('form');
const resultTxt = document.querySelector('.result');
console.dir(resultTxt);
const sections = document.querySelectorAll('section');
const question1 = document.querySelectorAll('.question-1');
const question2 = document.querySelectorAll('.question-2');
const question3 = document.querySelectorAll('.question-3');
const question4 = document.querySelectorAll('.question-4');
const question5 = document.querySelectorAll('.question-5');

const questions = [question1, question2, question3, question4, question5];


form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let score = 0;
    for (let i = 0; i < questions.length; i++){
        questions[i].forEach(el => {
            if (el.checked) {
                if (el.value === responses[i]) {
                    sections[i].className = 'question-contaiber true';
                    score++;
                } else {
                    sections[i].className = 'question-contaiber false';
                }
            }
        })
    }
    resultTxt.textContent = `Résultat: ${emojis[emojis.length - score]}`;
}

function verification(e) {
    
}
