
function checkNumber(){
    let firstNumber = parseInt(document.getElementById("number1").value);
    let secondNumber = parseInt(document.getElementById("number2").value);
    let thirdNumber = parseInt(document.getElementById("number3").value);
    let sum = firstNumber + secondNumber + thirdNumber;
    let product = firstNumber * secondNumber * thirdNumber;
    let result = document.getElementById("result").innerHTML;
    if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
        console.log(sum, product);
    } else if (firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0){
        console.log(sum);
    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        console.log("only negatives");
    }
        console.log(result);
    };
    