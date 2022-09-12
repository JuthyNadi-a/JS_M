
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
            console.log(`${this.license}, ${this.maker}, ${this.model}, ${this.owner}, ${this.price}, ${this.color}`)
        }
    }
    const newData = new Car (license.value, maker.value, model.value, owner.value, price.value, color.value);
    newData.data();
    
    function fillCarArray() {
        const newData = new Car (license.value, maker.value, model.value, owner.value, price.value, color.value); 
        carArray.push(newData);
    }
    fillCarArray();
    console.log(carArray);
})
/* `${document.querySelector('#license').value}, ${document.querySelector('#maker').value}` */