function getGas() {
    let price = Number(document.getElementById("price").value);
    let amount = Number(document.getElementById("amount").value);
    let gasAmount = (amount/price);
    return console.log(`Gas can be bought ${gasAmount.toFixed(2)} litres`) ;
};