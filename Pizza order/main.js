let price = 0;
let pizzaName = "";
let toppingPrice = 0;
let toppingsName = "";
let deliveryPrice = 0;
let deliveryOption = "";
let totalPrice = price + toppingPrice + deliveryPrice;
let display = "";
const pizzaOrder = (id, pizzaName) => {
    const pizzaSize = () => {
        if (id == "for2") {
            price = 7.5;
            pizzaName = document.querySelector("#for2").value;
        } else if (id == "for4") {
            price = 10.5;
            pizzaName = document.querySelector("#for4").value;
        } else if (id == "for6") {
            price = 12.5;
            pizzaName = document.querySelector("#for6").value;
        } else if (id == "for8") {
            price = 15.5;
            pizzaName = document.querySelector("#for8").value;
        }
    }
    pizzaSize();
    /* console.log(`pizza ${val} price is ${price}`); */
    /* console.log(totalPrice); */
}


/* Pizza topping part */

const pizzaTopping = () => {
    const toppings = document.querySelectorAll('input[type="checkbox"]:checked').length;
    toppingsName = document.querySelector('input[type=checkbox][name=topping]:checked').value;

    if (toppings == 5) {
        toppingPrice = 0.5;
    } else if (toppings == 6) {
        toppingPrice = 1;
    } else if (toppings == 7) {
        toppingPrice = 1.5;
    } else if (toppings == 8) {
        toppingPrice = 2;
    } else if (toppings == 9) {
        toppingPrice = 2.5;
    } else if (toppings == 10) {
        toppingPrice = 3;
    }
    console.log(`Toppings ${toppingsName} price is ${toppingPrice}`);
} 

/* Pizza delivery options */
const pizzaDelivery = () => {
    const select = document.getElementById('select');

    select.addEventListener('change', function handleChange(event) {
      //  getting selected TEXT in or outside event handler
      deliveryOption = select.options[select.selectedIndex].text;
      if (deliveryOption == "Home"){
        deliveryPrice = 5;
      } else {
        deliveryPrice = 0;
      }
/*       console.log(deliveryOption,`,delivery price is ${deliveryPrice}€`); */
    });
};

pizzaDelivery();
pizzaOrder();


/* placing order part */
document.getElementById("btnOrder").addEventListener("click", function() {
    
    pizzaOrder();
    pizzaTopping();
    pizzaDelivery();
    totalPrice = price + toppingPrice + deliveryPrice;
    final.textContent = `Total price is ${totalPrice}. 
    You ordered pizza ${pizzaName}, toppings ${toppingsName}, delivery option is ${deliveryOption}`;
  });