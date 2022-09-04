const pizzaOrder = (id, price) => {
    let toppingPrice;
    let deliveryPrice;
    let totalPrice = price + toppingPrice + deliveryPrice;
    const pizzaSize = () => {
        if (id == "for2") {
            price = 7.5;
            console.log(price);
            console.log(totalPrice);
            return totalPrice;
        } else if (id == "for4") {
            price = 10.5;
            console.log(price);
            return totalPrice;
        } else if (id == "for6") {
            price = 12.5;
            console.log(price);
            return totalPrice;
        } else if (id == "for8") {
            price = 15.5;
            console.log(price);
            return totalPrice;
        }
    }
    pizzaSize();
    document.getElementById('select').onclick = function() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        if(checkboxes.length == 4) {
            toppingPrice = 0;
            totalPrice = price + toppingPrice+ deliveryPrice;
            console.log(checkboxes.length);
            console.log(totalPrice);
            return totalPrice;
        } else if (checkboxes.length > 4) {
            checkboxes++;
            toppingPrice += 0.5;
            totalPrice = price + toppingPrice+ deliveryPrice;  
            return totalPrice;
        }
    }
    
    totalPrice = parseFloat(price + toppingPrice + deliveryPrice);
    final.textContent = `total price is ${totalPrice} €`;
    /* console.log(totalPrice); */
}
pizzaOrder();