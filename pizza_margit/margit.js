const form = document.querySelector("form");

const customer = document.querySelector("#name");
/* console.log(customer); */
/* querySelectorAll takes all the element and acts as a nodelist and simple array */
const size = document.querySelectorAll('[name:"pizzaSize"]');
console.log(size);

const toppings = document.querySelectorAll('input[type="checkbox]');
console.log(toppings);

const delivery = document.querySelector('#delivery');

const order = document.querySelector('#order');
const takeOrder = (event) => {
    /* to remove default time when shown in console and that it stays */
    event.preventDefault();
    /* console.log("order taken"); */

    let customerName = customer.value;
    let sizeResult = "";
    let toppingResult = [];
    let deliveryResult = delivery.options[delivery.selectedIndex].value;
    let price = 0;

    size.foreach((item) => {
        if (item.checked) {
            sizeResult = item.value;
        }
    });
    switch (sizeResult) {
        case 'for2':
            price += 7.5;
            break;
        case 'for4':
            price += 10.5;
            break;
        case 'for6':
            price += 12.5;
            break;
        case 'for8':
            price += 15.5;
            break;
        default:
    }


    toppings.forEach((item) => {
        if (item.checked) {
            toppingResult = item.value;
        }
    });
    
    if (toppingResult.length > 4) {
        price += (toppingResult.length-4) * 0.5;
    }

    if (deliveryResult = "home") {
        price += 5;
    }

    order.textContent = `Name: ${customerName}. Size was ${sizeResult},toppings: ${toppingResult.join(', ')}, delivery option is ${deliveryResult}, total price is : ${price} €.`


    order.style ['box-shadow'] = '0 0 1 grey'
    console.log(customerName);
    console.log(sizeResult);
    console.log(toppingResult);
    console.log(deliveryResult);
    console.log(price);

    form.reset();
};

form.addEventListener('submit', takeOrder);