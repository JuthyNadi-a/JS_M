const form = document.querySelector('form');
const user = document.querySelector('#name');
const age = document.querySelector('#age');
const health = document.querySelectorAll('[name="health"]');
const habit = document.querySelectorAll('[name="habit"]');

let initialInsurance = 0;
let healthInsurance = 0;
let habitInsurance = 0;
let totalInsurance = initialInsurance + healthInsurance + habitInsurance;
/* console.log(habit);
console.log(health); */
const getInsurance = (event) => {
    event.preventDefault();
    const userName = user.value;
    const userAge = age.value;
    let healthCondition = [];
    let userHabits = [];

        /* Age portion */
 if (userAge >= 66 && userAge <= 75) {
    initialInsurance = 500 + (500 * 2.1)
} else if (userAge >= 56 && userAge <= 65) {
    initialInsurance = 500 + (500 * 1.5)
} else if (userAge >= 46 && userAge <= 55) {
    initialInsurance = 500 +(500 * 1)
} else if (userAge >= 36 && userAge <= 45) {
    initialInsurance = 500 +(500 * .6)
} else if (userAge >= 26 && userAge <= 35) {
    initialInsurance = 500 +(500 * .3)
} else if (userAge > 18 && userAge <= 25) {
    initialInsurance = 500 + (500 * .1)
} else if (userAge == 18) {
        initialInsurance = 500;
    }
    
    /* Health condition portion */
    health.forEach((item) => {
        if (item.checked){
            healthCondition.push(item.value);
        }
    });

    if (healthCondition.length == 1) {
        healthInsurance = 500 + (500 * 0.1);
    }
    else if (healthCondition.length == 2) {
        healthInsurance = 500 + (500 * 0.2);
    }
    else if (healthCondition.length == 3) {
        healthInsurance = 500 + (500 * 0.3);
    } else {
        healthInsurance = 0;
    }
        /* Habit portion */
    habit.forEach((item) => {
        if (item.checked){
            userHabits.push(item.value);
        }
    });
    
    if (item.value = 'Daily exercise'){
        habitInsurance = initialInsurance - (initialInsurance * 0.5);
    } else {
        habitInsurance = initialInsurance + (initialInsurance * 0.5);
    }
/* if (userHabits.length = 0){
    habitInsurance = 0;
} else if (userHabits.length = 4) {
    habitInsurance =  initialInsurance + (initialInsurance * 1.5);
} else if (userHabits.length = 3) {
    habitInsurance =  initialInsurance + (initialInsurance * 1);
} else if (userHabits.length = 2) {
    habitInsurance =  initialInsurance + (initialInsurance * 0.5);
} else if (userHabits.length = 1){
    habitInsurance = initialInsurance - (initialInsurance * 0.5); 
} */
     /* display final part */
    totalInsurance = initialInsurance + healthInsurance + habitInsurance;
    console.log(userName);
    console.log(userAge);
    console.log(healthCondition);
    console.log(userHabits);
    console.log(totalInsurance);
    result.innerHTML = `Hi, <span>${userName}!</span> Your age is: <span>${userAge}</span>. Your health condition is: <span>${healthCondition.join(
        ', '
      )}</span>. Your regular habit is: <span>${userHabits.join(
        ', ')}</span>. Your total insurance: <span>${totalInsurance.toFixed(0)} €</span>.`;
    
      /* form.reset(); */
}

form.addEventListener('submit', getInsurance);
