let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
const defaultColor1 = "#0000ff";
const defaultColor2 = "#00ffff";
const colorBox = document.querySelector("#colorBox");
let cssCode = document.querySelector('#result');
function colorUpdate(event) {
    /* if ("colorBox") { */
        colorBox.style.backgroundColor = "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
        /* colorBox.style.backgroundColor = event.target.value; */
        cssCode.textContent = colorBox.style.backgroundColor + ";"
       /* } */
  } 
/* function colorInput() {

    color1.value = defaultColor1;
    color1.addEventListener("input", colorUpdate, false);
    color1.select(); 
  
    
    color2.value = defaultColor2;
    color2.addEventListener("input", colorUpdate, false);
    color2.select(); 
  }
  colorInput(); */

    
    color1.addEventListener("input", colorUpdate);
  
    color2.addEventListener("input", colorUpdate);
/* colorUpdate(); */
  
  