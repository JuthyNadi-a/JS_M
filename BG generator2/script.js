let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
const defaultColor1 = "#0000ff";
const defaultColor2 = "#00ffff";
let colorBox = document.querySelector(".displayColor");
let linearDirection = document.getElementsByName("toDirection");
let cssCode = document.querySelector('#result');

function colorUpdate(event){

    colorBox.style.background  = event.target.value
    colorBox.style.background =
    "linear-gradient(to right," 
    /* + linearDirection.value
    + ", " */
    + color1.value
    + ","
    + color2.value
    + ")";
    cssCode.textContent = colorBox.style.background;
      console.log(color1.value);
      console.log(color2.value);
      console.log(linearDirection.value);
  }
  
document.querySelector('input[name="toDirection"]').oninput=colorUpdate;
color1.addEventListener("input", colorUpdate)
color2.addEventListener("input", colorUpdate)
