const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");

let activeNum = 0;
let timer;
/* Randomize circle */
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const startGame = () => {
  console.log('start');
  let nextActive = newCircle(activeNum);

  circles[nextActive].classList.toggle('active');
  circles[activeNum].classList.remove('active');

  activeNum = nextActive;

  console.log(` current active number is ${activeNum}`);

  timer = setTimeout(startGame, 1000);

  function newCircle(activeNum) {
    let nextActive = getRndInt(0,3);
    if (nextActive != activeNum) {
      return nextActive;
    } else {
      return newCircle(activeNum);
    }
  }
}
/* circle clicked */
const activeCircle = (e) => {
  console.log(`Circle ${e.target.innerHTML} is clicked`);
}
/* Update score with click */
let count = 0;
const scoreCount = () => {
  count++;
  score.textContent = count;
};

/* call  function */
circles.forEach((circle) => {
  circle.addEventListener("click", activeCircle);
  circle.addEventListener("click", scoreCount);
})
/* Stop game */ 
const stopGame = () => {
  console.log('game ended');
  clearTimeout(timer);
}
stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', startGame);
