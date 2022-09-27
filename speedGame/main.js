const div = document.querySelector('.container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const active = document.querySelector('#active');
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('#closeButton')

let activeNum = 0;
let timer;
let pace = 1000;
let rounds= 0;
let initialMode = false;
let startSound;
let endSound;

const startGame = () => {
  startSound = new sound("assests/game1.wav");
  startSound.play();
  initialMode = true;
  stopBtn.style.display = 'initial';
  startBtn.style.display = 'none';
  if (rounds >= 3) {
    startSound = new sound("assests/game1.wav");
    startSound.stop();
    endSound = new sound ("assests/gameEnd.mp3");
    endSound.play();
    return stopGame();
  }

  let nextActive = newCircle(activeNum);
  
  circles[nextActive].classList.toggle('active');
  circles[activeNum].classList.remove('active');
  
  activeNum = nextActive;
  
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
  /* circle clicked */
  const activeCircle = (circle,i) => {
    circle.addEventListener("click", function () {
      if (circle.click && initialMode == true) {
        activeCircle(i);
      }
    })
  }
}
/* Randomize circle */
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  /* Update score with click */
  let count = 0;
  const scoreCount = (i) => {
    if (i !== activeNum){
      stopGame();
      startSound = new sound("assests/game1.wav");
      startSound.stop();
      endSound = new sound ("assests/gameEnd.mp3");
      endSound.play();
    } else {
      count++;
      rounds--;
      score.textContent = count;
      if (count <=1) {
        modalScore.textContent = `You caught ${count} butterfly!!Try again!`;
      } else if (count >= 2 && count <= 5){
        modalScore.textContent = `You caught ${count} butterflies!!You can be faster! Try again!`;
      } else if (count >= 6 && count <= 30){
        modalScore.textContent = `You caught ${count} butterflies!! You did good! Try to be faster!`;
      }
      else if (count > 30){
        modalScore.textContent = `You caught ${count} butterflies!! That is super fast! Amazing!!`;
      }
    }
  };
/* call  function */
circles.forEach((circle, i) => {
  circle.addEventListener("click", function () {
    if (circle.click && initialMode == true) {
      scoreCount(i)
    }
      });
  });
/* Show modal */
const showModal = () => {
  overlay.classList.toggle('show');
}
/* Stop game */ 
const stopGame = () => {
  /* startSound = new sound("assests/gameStart.wav");
  startSound.pause(); */
  endSound = new sound ("assests/gameEnd.mp3");
  endSound.play();
  showModal();
  initialMode = false;
  clearTimeout(timer);
}
/* Reset game */
const resetGame = () => {
  window.location.reload();
};
/* Game Sound */
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', startGame);
closeBtn.addEventListener('click', resetGame);
