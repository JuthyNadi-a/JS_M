
let form = document.querySelector('form');
let license = document.querySelector('#license');
let maker = document.querySelector('#maker');
let model = document.querySelector('#model');
let owner = document.querySelector('#owner');
let price = document.querySelector('#price');
let color = document.querySelector('#color');
let addBtn = document.querySelector('#add');
let licensePlate = document.querySelector('#search');
let search = document.querySelector('#searchBtn');


addBtn.addEventListener('click', function(event) {
    event.preventDefault();
  document.getElementById("carTable").style.display = "block";
      
      let table = document.getElementById("carTable");
      let row = table.insertRow(-1);
      let licenseNumber = row.insertCell(0);
      let carMaker = row.insertCell(1);
      let carModel = row.insertCell(2);
      let carOwner = row.insertCell(3);
      let carPrice = row.insertCell(4);
      let carColor= row.insertCell(5);
      licenseNumber.innerHTML = license.value;
      carMaker.innerHTML= maker.value;
      carModel.innerHTML= model.value;
      carOwner.innerHTML = owner.value;
      carPrice.innerHTML = price.value;
      carColor.innerHTML = color.value;
      
     
    console.table(table.outerText);
  return false;
})
search.addEventListener('click', function() {
    let licenseNumber = licensePlate.value
    let search = license.value.includes(licenseNumber);
    console.log(search);
    console.log(licenseNumber);
    console.log(license.value);
    if (search === true) {
       result.innerHTML = `The license plate is <span>${license.value}</span>.The model of the car is <span>${model.value}</span> and it belongs to <span>${owner.value} </span>.`
    } else {
        result.innerHTML = `There is no car with license plate added to the system. Try again?`
    }
})