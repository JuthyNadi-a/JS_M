let userNumber = parseInt(prompt());
function checkNumber() {
    if (userNumber >= 0 && userNumber/2){
        console.log("Number is even");
    } else {
        console.log("Number is odd")
    }
};
checkNumber();