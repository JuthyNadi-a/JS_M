/* 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…) */

/* for (let num = 1; num < 100; num++) {
    if (num % 2 !== 0){
     console.log(num); 
    }
} */

/* 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line. */

/* let num;   
 let result2 = 0;
 for (num = 0; num < 100; num += 2) {
    result2 += `${[num + 2]}` + " " + `${[100-(num+2)]}`;
 } */
 /* console.log(result2); */
/*  let result = " ";
 for (num = 0; num < 100; num += 2){
    result += " " + num+2 + " ";
    result += " " + 100-(num+2) + " ";
 } */
 /* console.log(result); */
/*3.  Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.) */

/*  function speed() {
    let distance, time;
    while (distance != 0){
     distance = prompt("what is the distance?");
    
    if (distance>0) {
        time = prompt("How much is the time?");
        let averageSpeed = distance/time;
        console.log(averageSpeed);
    }
}
} */
/*  speed(); */

/* 4.Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even. */

/* function evenNumber () {
    for (i = 0; i <= 20; i++) {
        let randNum = Number(prompt());
        if (randNum%2 == 0){
            return randNum;
        }
    }
    console.log(randNum);
} */
/* evenNumber (); */

/* 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */
/* 
let num2;
let sum = 0;
let count = 0;
while (num2 != 0) {
    num2 = prompt("Your number");
    sum += num2;
    count ++;
} */
/* console.log(sum/(count-1)); */

/* 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers. */
let randNum2;
let sum2 = 0;
let counter2 = 0;
let average;
/* for (i = 0; i <= 25; i++) {
    randNum2 = Number(prompt());
    average = parseInt(sum2 + randNum2)/i;
}
console.log(`numbers entered ${i}, average is ${average}`); */

/* do {
    let input = Number(prompt());
    sum2 += input;
    counter ++;
} while (counter !== 25); 
console.log(`numbers entered ${i}, average is ${average}`); */

/* 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers. */

/* 

let counter3;
let confirmation;
let average2;
let sum = 0;
while (confirmation != "n") {
    let num = Number(prompt("Enter number"));
    confirmation = prompt("Do you want to continue giving numbers?(y/n)");
    sum += num
    counter3++;
};
average2 = sum/counter3;
console.log(average2); */

let input, confirmation;
let sum3 = 0;
let counter = 0;

while (confirmation != 'n') {
  input = Number(prompt('Enter your number'));
  confirmation = prompt('Do you want to continue giving numbers?(y/n)');
  sum3 = sum3 + input;
  counter++;
}

console.log(`Average is ${sum2 / counter}`);


/*8.  Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave. */

/* function numbers() {
    let num4;
    let number5;
    let counter = Number(prompt("how many numbers do you want to give to the program?"));
    let smallestNum = 0;
    for (num4=0; num4 < counter; num4++){
        number5 = Number(prompt("Next number"));
        if (number5 >= 0 && number5 == smallestNum ){
            number5 = smallestNum;
        }else if (num4 < smallestNum){
            number5 = smallestNum;
        }
    }
    console.log(number5);
}
numbers(); */


/* 9. Make a program that asks ten numbers and in the end prints out two biggest numbers. */

/* let biggestNum = 0;
let secondBiggestNum = 0;
let number5;
    for (let num4 = 0; num4 < 10; num4++){
        number5 = Number(prompt("Enter number"));
        if (number5 > biggestNum ){
            secondBiggestNum  = biggestNum;
            biggestNum = number5;
        }else if (number5 > secondBiggestNum){
            secondBiggestNum = number5;
        }
    }
console.log(`largest num is ${biggestNum}, second largest num is ${secondBiggestNum}`);
 */

/* 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */


let i;
let sum = 0;
let counter3 =0;
let average2;
let largestNum = 0;
let smallestNum = 0;

for ( i = 0; i < 10; i++) {
    let numbers = Number(prompt("Enter number"));
    sum += numbers;
    counter3++;
    average2 = sum/counter3;
    if (numbers> largestNum){
        largestNum = numbers
    }
    if (numbers >= 0 && smallestNum == 0 ){
        smallestNum = numbers;
    }else if (numbers < smallestNum){
        smallestNum = numbers;
    }
}
console.log(sum, average2, largestNum, smallestNum);