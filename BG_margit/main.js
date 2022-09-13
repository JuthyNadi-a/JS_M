let form = document.querySelector('form');
let direction = document.querySelectorAll('input[name="direction"]');
let cssCode = document.querySelector('result');

function colorUpdate(event) {
    event.preventDefault();
  let selectedValue;
  for (const element of direction) {
    if (element.checked) {
      selectedValue = element.value;
    }
}
colorBox.style.backgroundImage  = event.target.value;
colorBox.style.backgroundImage = gradient;
cssCode.textContent = `${gradient};`;
};

form.addEventListener('change', colorUpdate);