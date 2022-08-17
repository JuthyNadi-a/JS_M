/* 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…) */

/* for (let num = 1; num < 100; num++) {
    if (num % 2 !== 0){
    console.log(num);
    }
} */

/* Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line. */
function checkLoop() {
 let num;
 let num2;   
for (num = 0; num < 100; num += 2) {
    if (num % 2 === 0){
        console.log(num);
    }
}
for (num2 = 100; num2 <= 0; num2 -= 2) {
        if (num2 % 2 === 0){
            console.log(num2);
        }
}
console.log(`${[num]} ${[num2]}`);
}
checkLoop();