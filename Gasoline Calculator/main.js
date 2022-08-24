const getGas = () => {
    let price = Number(document.getElementById("price").value);
    let amount = +(document.querySelector("#amount").value);

    let answer = document.querySelector("#answer");
    let gasAmount = Math.floor(amount/price);
    /* return console.log(`Gas can be bought ${gasAmount} litres`) ; */

    /* let text;

    if (gasAmount>=10){
        text= `You could get ${gasAmount} litres`
    } else {
        text = `You could escape`
    } */

    answer.textContent = gasAmount;
    /* answer.textContent = text; */


};