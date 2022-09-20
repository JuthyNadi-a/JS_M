const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const circles = document.querySelectorAll(".circle");
const result = document.querySelector("#display");

const startGame = () => {
console.log('game started');

  /* for (let circle of circles) {
    circle.addEventListener("click", activeCircle);
  } */

  /* console.log(circles); */
  circles.forEach((circle) => {
    /* console.log(circle); */
    circle.addEventListener("click", activeCircle)
  })
}
/* cicle clicked */
const activeCircle = (e) => {
    display.innerHTML = `Circle ${e.target.innerHTML} is clicked`
}
/* Stop game */ 
const stopGame = () => {
    console.log('game ended');
}
stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', startGame);