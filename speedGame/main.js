const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('#closeButton')

let activeNum = 0;
let timer;
let pace = 1000;
let rounds= 0;


const startGame = () => {

  if (rounds >= 3) {
    return stopGame();
  }
  console.log('start');
  let nextActive = newCircle(activeNum);
  
  circles[nextActive].classList.toggle('active');
  circles[activeNum].classList.remove('active');
  
  activeNum = nextActive;
  
  console.log(` current active number is ${activeNum}`);
  /* set timer */
  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  rounds++;
/* check random number to be unique */
  function newCircle(activeNum) {
    let nextActive = getRndInt(0,3);
    if (nextActive != activeNum) {
      return nextActive;
    } else {
      return newCircle(activeNum);
    }
  }
}
/* Randomize circle */
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/* circle clicked */
const activeCircle = (i) => {
  console.log(`Circle ${i.target.innerHTML} is clicked`);
}
/* Update score with click */
let count = 0;
const scoreCount = (i) => {
  if (i !== activeNum){
    stopGame()
  } else {
    count++;
    rounds--;
    score.textContent = count;
  }
};

/* call  function */
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => scoreCount(i));
  circle.addEventListener("click", () => activeCircle(i));
})
/* Stop game */ 
const stopGame = () => {
  console.log('game ended');
  overlay.style.display='flex';
  clearTimeout(timer);
}

const resetGame = () => {
  window.location.reload();
};


stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', startGame);
closeBtn.addEventListener('click', resetGame);
