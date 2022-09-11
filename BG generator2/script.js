let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let colorBox = document.querySelector(".displayColor");
let linearDirection = document.querySelector('input[name="toDirection"]');
/* let arrow1 = document.querySelector('#arrow1');
let arrow2 = document.querySelector('#arrow2');
let arrow3 = document.querySelector('#arrow3');
let arrow4 = document.querySelector('#arrow4');
let arrow5 = document.querySelector('#arrow5');
let arrow6 = document.querySelector('#arrow6');
let arrow7 = document.querySelector('#arrow7');
let arrow8 = document.querySelector('#arrow8'); */
let cssCode = document.querySelector('#result');

function colorUpdate(event) {
  console.log(linearDirection.value)
    colorBox.style.background  = event.target.value
    colorBox.style.background =
    `linear-gradient(to ${linearDirection.value}, ${color1.value}, ${color2.value})`;
    cssCode.textContent = colorBox.style.background;
}
  
document.querySelector('input[name="toDirection"]').oninput=colorUpdate;
color1.addEventListener("input", colorUpdate)
color2.addEventListener("input", colorUpdate)
arrow1.addEventListener("click", colorUpdate)
arrow2.addEventListener("click", colorUpdate)
arrow3.addEventListener("click", colorUpdate)
arrow4.addEventListener("click", colorUpdate)
arrow5.addEventListener("click", colorUpdate)
arrow6.addEventListener("click", colorUpdate)
arrow7.addEventListener("click", colorUpdate)
arrow8.addEventListener("click", colorUpdate)
