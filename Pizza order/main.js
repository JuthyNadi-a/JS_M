let price = 0;
let toppingPrice = 0;
let deliveryPrice = 0;
let totalPrice = price + toppingPrice + deliveryPrice;
const pizzaOrder = (id) => {
    const pizzaSize = () => {
        if (id == "for2") {
            price = 7.5;
        } else if (id == "for4") {
            price = 10.5;
        } else if (id == "for6") {
            price = 12.5;
        } else if (id == "for8") {
            price = 15.5;
        }
    }
    pizzaSize();
    console.log(price + toppingPrice);
    console.log(totalPrice);
}
pizzaOrder();

/* Pizza topping part */

const pizzaTopping = () => {
    const toppings = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (toppings > 4 && toppings <= 10) {
        toppingPrice += 0.5;
    }
    console.log(`price is ${toppingPrice}`);
} 

/* Pizza delivery options */
const pizzaDelivery = () => {
    let deliveryOption = document.querySelector("home")
    if (deliveryOption = "home") {
        deliveryPrice = 5 ;
    }     
    console.log(deliveryPrice);
}
