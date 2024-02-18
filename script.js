const mode = document.querySelectorAll(".mode");
const hint = document.getElementById('hint');
const guess = document.getElementById('guess');
const user_input = document.getElementById('user_input');

// const easy = document.getElementById('easy')
// const normal = document.getElementById('normal')
// const hard = document.getElementById('hard')

var dificulty = ''

function easy(){
    sessionStorage.setItem("dificulty", 0);
    window.location.reload()
}
function normal(){
    sessionStorage.setItem("dificulty", 1);
    window.location.reload()
}
function hard(){
    sessionStorage.setItem("dificulty", 2);
    window.location.reload()
}

var number

if(sessionStorage.getItem("dificulty") == 0){
    number = Math.floor(Math.random() * 10) + 1;
    document.getElementById('mode').textContent = "10"
}

if(sessionStorage.getItem("dificulty") == 1){
    number = Math.floor(Math.random() * 1000) + 1;
    document.getElementById('mode').textContent = "1000"
}

if(sessionStorage.getItem("dificulty") == 2){
    number = Math.floor(Math.random() * 1000000) + 1;
    document.getElementById('mode').textContent = "1000000"
}

const y = document.getElementById("user_input")
y.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      guessNumber()
      blink()
    }
});

// console.log(dificulty)
// console.log(number);

function guessNumber(){
    if(user_input.value == number){
        hint.innerHTML = 'You got it!'
    }

    if(user_input.value < number){
        hint.innerHTML = `The number is higher than ${user_input.value}`
    }

    if(user_input.value > number){
        hint.innerHTML = `The number is lower than ${user_input.value}`
    }
}

function blink(){
    hint.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 250
    })
}

guess.addEventListener('click', guessNumber)
guess.addEventListener('click', blink)
