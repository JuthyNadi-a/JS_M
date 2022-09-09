let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let colorBox = document.querySelector(".displayColor");
let linearDirection = document.getElementsByName("toDirection");
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
    colorBox.style.background  = event.target.value
    colorBox.style.background =
    "linear-gradient(to right," 
    /* + linearDirection.value
    + ", " */ + color1.value + "," + color2.value + ")";
    /* arrow 1 */
    arrow1.style.background  = event.target.value
    arrow1.style.background =
    "linear-gradient(to right bottom," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow1.style.background;
    /* arrow 2*/
    arrow2.style.background  = event.target.value
    arrow2.style.background =
    "linear-gradient(to top bottom," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow2.style.background;
    /* arrow 3 */
    arrow3.style.background  = event.target.value
    arrow3.style.background =
    "linear-gradient(to left bottom," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow3.style.background;
    /* arrow 4 */
    arrow4.style.background  = event.target.value
    arrow4.style.background =
    "linear-gradient(to left right," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow4.style.background;
    /* arrow 5 */
    arrow5.style.background  = event.target.value
    arrow5.style.background =
    "linear-gradient(to right left," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow5.style.background;
    /* arrow 6*/
    arrow6.style.background  = event.target.value
    arrow6.style.background =
    "linear-gradient(to left top," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow6.style.background;
    /* arrow 7*/
    arrow7.style.background  = event.target.value
    arrow7.style.background =
    "linear-gradient(to bottom top," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow7.style.background;
    /* arrow 8*/
    arrow8.style.background  = event.target.value
    arrow8.style.background =
    "linear-gradient(to right top," + color1.value + "," + color2.value + ")";
    cssCode.textContent = arrow8.style.background;
      /* console.log(color1.value);
      console.log(color2.value);
      console.log(linearDirection.value); */
  }
  
document.querySelector('input[name="toDirection"]').oninput=colorUpdate;
color1.addEventListener("input", colorUpdate)
color2.addEventListener("input", colorUpdate)
