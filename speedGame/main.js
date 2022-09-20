const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const circles = document.querySelectorAll(".circle");
const result = document.querySelector("#display");

const startGame = () => {
console.log('game started');
active.addEventListener('click', activeCircle);
for (let circle of circles) {
  circle.addEventListener("click", activeCircle);
}
}
/* cicle clicked */
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