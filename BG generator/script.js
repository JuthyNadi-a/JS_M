let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let colorBox = document.querySelector(".displayColor");
let arrow1 = document.querySelector('#arrow1');
let arrow2 = document.querySelector('#arrow2');
let arrow3 = document.querySelector('#arrow3');
let arrow4 = document.querySelector('#arrow4');
let arrow5 = document.querySelector('#arrow5');
let arrow6 = document.querySelector('#arrow6');
let arrow7 = document.querySelector('#arrow7');
let arrow8 = document.querySelector('#arrow8');
let cssCode = document.querySelector('#result');

function colorUpdate(event) {
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }
  /*  Arrows */
  arrow1.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to right bottom, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow2.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  
  arrow3.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to left bottom, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow4.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow5.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to left, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow6.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to left top, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow7.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to top, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  arrow8.addEventListener('click', function (event){
    colorBox.style.background  = event.target.value;
    colorBox.style.background =
    `linear-gradient(to right top, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
  }) 
  

color1.addEventListener("input", colorUpdate)
color2.addEventListener("input", colorUpdate)

