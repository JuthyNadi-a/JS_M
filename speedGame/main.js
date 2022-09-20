const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const startGame = () => {
console.log('click');
active.addEventListener('click', activeCircle);
for (let circle of circles) {
  circle.addEventListener("click", activeCircle);
}
}

const circles = document.querySelectorAll(".circle");
const result = document.querySelector("#display");
const activeCircle = (e) => {
        console.log('circle clicked');
        display.innerHTML = `ID of circle ${e.target.innerHTML} is ${e.target.id}`
}
/* Stop game */ 
const stopGame = () => {
    console.log('game ended');
}
stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', startGame);