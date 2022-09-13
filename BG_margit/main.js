let form = document.querySelector('form');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let direction = document.querySelectorAll('input[name="direction"]');
let cssCode = document.querySelector('#result');

function colorUpdate(event) {
    event.preventDefault();
  let selectedValue;
  for (const element of direction) {
    if (element.checked) {
      selectedValue = element.value;
    }
    console.log(element.value);
}
let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
console.log(gradient);
document.body.style.backgroundImage = gradient;
cssCode.textContent = `${gradient};`;
};

form.addEventListener('change', colorUpdate);