/* switch (id) {
        case 0:
            id == 4;
            toppingPrice = 0;
            totalPrice;
            break;
        case 1: 
            id == 5;
            toppingPrice = 0.5;
            break;
        case 2:
            id++;
            toppingPrice += 0.5;
            break;
    } */

  /*   pizzaSize();
    const pizzaTopping = () => {
        if (id == 4) {
            toppingPrice = 0;
            console.log(totalPrice);
            return totalPrice;
        } else if (id > 4) {
            toppingPrice = 0.5;
            id++;
            console.log(totalPrice);
            return totalPrice;
        }
    } */

    if(checkboxes.length === 4) {
        toppingPrice = 0;
        totalPrice = price + toppingPrice + deliveryPrice;
        console.log(checkboxes.length);
        console.log(totalPrice);
        return totalPrice;
    } else if (checkboxes.length > 4) {
        checkboxes++;
        toppingPrice += 0.5;
        totalPrice = price + toppingPrice + deliveryPrice;
        return totalPrice;
    }

    const pizzaTopping = () => {
        var checkboxes = 
            document.getElementsByName('topping');

        var result = "";

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result += checkboxes[i].value 
                    + " " + " Topping, ";
                    console.log(result);
            }
        }
    }
    pizzaTopping;