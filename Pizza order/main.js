const user = document.querySelector('#name');
let price = 0;
let pizzaName = " ";
let toppings = document.querySelectorAll('input[type="checkbox"]');
let toppingPrice = 0;
let toppingItems = [];
let deliveryPrice = 0;
let deliveryOption = " ";
let totalPrice = price + toppingPrice + deliveryPrice;
let display = " ";

const pizzaOrder = (id) => {
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
    
    /* Pizza topping part */
    toppings.forEach((item) => {
        if (item.checked) {
            toppingItems.push(item.value);
        }
    });
    
        
        if (toppingItems.length == 5) {
            toppingPrice = 0.5;
        } else if (toppingItems.length == 6) {
            toppingPrice = 1;
        } else if (toppingItems.length == 7) {
            toppingPrice = 1.5;
        } else if (toppingItems.length == 8) {
            toppingPrice = 2;
        } else if (toppingItems.length == 9) {
            toppingPrice = 2.5;
        } else if (toppingItems.length == 10) {
            toppingPrice = 3;
        } else {
            toppingPrice = 0;
        }    
    }
        /* Pizza delivery options */
        const pizzaDelivery = () => {
            const select = document.querySelector('#select');
            
            select.addEventListener('change', function handleChange() {
                //  getting selected TEXT in or outside event handler
                deliveryOption = select.options[select.selectedIndex].value;
                if (deliveryOption == "home"){
                    deliveryPrice = 5;
                } else {
                    deliveryPrice = 0;
                }
                console.log(deliveryOption,`,delivery price is ${deliveryPrice}€`);
            });
        };
        
        pizzaDelivery();
        pizzaOrder();
        
        
        /* placing order part */
        document.getElementById("btnOrder").addEventListener("click", function() {
            let userName = user.value;
            pizzaOrder();
            pizzaDelivery();
            totalPrice = price + toppingPrice + deliveryPrice;
            final.innerHTML = `Hi, <span>${userName}</span> 
            You ordered pizza <span>${pizzaName}</span>, toppings: <span>${toppingItems.join(' , ')}</span> & delivery option is <span>${deliveryOption}</span>. Total price is <span>${totalPrice}€</span>.`;
        });