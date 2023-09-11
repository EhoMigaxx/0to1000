const userNumber = document.getElementById("userNumber");
const hint1 = document.getElementById("hint1");
const hint2 = document.getElementById("hint2");
const goBtn = document.getElementById("go");

var num = Math.floor(Math.random() * 1000) + 1;

const y = document.getElementById("userNumber")
y.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendNumber()
      blink()
    }
});

function sendNumber(){
    const x = document.getElementById("userNumber").value;

    if(x > num){
        hint2.innerHTML = "The number is lower!"
    }
    if(x < num){
        hint2.innerHTML = "The number is higher!"
    }
    if(x == num){
        hint2.innerHTML = "You got it!"
    }
}

function blink(){
    hint2.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 250
    })
}

goBtn.addEventListener("click", sendNumber)
goBtn.addEventListener("click", blink)



