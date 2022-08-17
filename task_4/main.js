let firstNumber = parseInt(prompt("first number"));
let secondNumber = parseInt(prompt("second number"));
let thirdNumber = parseInt(prompt("third number"));
    
    function checkNumber(){
    let sum = firstNumber + secondNumber + thirdNumber;
    let product = firstNumber * secondNumber * thirdNumber;
    if (firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0){
        console.log(sum);
    } else if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
        console.log(sum, product);
    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        console.log("only negatives");}
    };
    
    

 