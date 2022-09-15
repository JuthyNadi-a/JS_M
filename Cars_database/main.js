
let license = document.querySelector('#license');
let maker = document.querySelector('#maker');
let model = document.querySelector('#model');
let owner = document.querySelector('#owner');
let price = document.querySelector('#price');
let color = document.querySelector('#color');
let addBtn = document.querySelector('#add');
let search = document.querySelector('#search');
let table = document.querySelector('.tbody');
let carArray = [];
let searchBtn =  document.querySelector('#searchBtn');
let result = document.querySelector('#result');


/* Get input data */
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    class Car {
        constructor(license, maker, model, owner, price, color) {
            this.license = license;
            this.maker = maker;
            this.model = model;
            this.owner = owner;
            this.price = price;
            this.color = color;
        }
        data() {
            return `${this.license}, ${this.maker}, ${this.model}, ${this.owner}, ${this.price}, ${this.color}`;
        }
    }
    /* fill array from input data */
    function fillCarArray() {
        const newData = new Car (license.value, maker.value, model.value, owner.value, price.value, color.value); 
        carArray.push(newData);
        /* if (carArray.length > 1) {
            carArray.splice(0, 1)
        } */
    }
    
    fillCarArray();
    console.table(carArray);
    
    /*  create table */
    table.innerHTML = "";
    createTable(table, carArray);
})
const createTable = (table, data) => {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
/* Search license plate */

searchBtn.addEventListener('click', function() {
    result.innerHTML = `There is no car with license plate added to the system. Try again?`;
    let searchLicense = search.value;
    for (let i = 0; i < carArray.length; i++) {
       console.log(i);
       if (searchLicense == carArray[i].license) {
           console.log(carArray[i].license);
           console.log(searchLicense);
           return result.innerHTML = `The license plate is <span>${carArray[i].license}</span>.The model of the car is <span>${carArray[i].model}</span> and it belongs to <span>${carArray[i].owner} </span>.`;
           
        } 
    }
})

