
let license = document.querySelector('#license');
let maker = document.querySelector('#maker');
let model = document.querySelector('#model');
let owner = document.querySelector('#owner');
let price = document.querySelector('#price');
let color = document.querySelector('#color');
let addBtn = document.querySelector('#add');
let carArray = [];
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
    
    function fillCarArray() {
        const newData = new Car (license.value, maker.value, model.value, owner.value, price.value, color.value); 
        carArray.push(newData);
        if (carArray.length > 1) {
            carArray.splice(0, 1)
        }
    }

    fillCarArray();
    console.log(carArray);

    let table = document.querySelector('#carTable');
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