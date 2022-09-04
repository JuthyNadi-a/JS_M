const form = document.querySelector('form');
const user = document.querySelector('#name');
const age = document.querySelector('#age');
const health = document.querySelectorAll('[name="health"]');
const habit = document.querySelectorAll('[name="habit"]');

let healthInsurance = 500;
let habitInsurance = 0;
let riskScore = 0;

const getInsurance = (event) => {
    event.preventDefault();
    const userName = user.value;
    const userAge = age.value;
    let healthCondition = [];
    let userHabits = [];

        /* Age section */
    if (userAge >= 66 && userAge <= 75) {
        healthInsurance = healthInsurance + (healthInsurance * 2.1)
    } else if (userAge >= 56 && userAge <= 65) {
        healthInsurance = healthInsurance + (healthInsurance * 1.5)
    } else if (userAge >= 46 && userAge <= 55) {
        healthInsurance = healthInsurance +(healthInsurance * 1)
    } else if (userAge >= 36 && userAge <= 45) {
        healthInsurance = healthInsurance +(healthInsurance * .6)
    } else if (userAge >= 26 && userAge <= 35) {
        healthInsurance = healthInsurance +(healthInsurance * .3)
    } else if (userAge > 18 && userAge <= 25) {
        healthInsurance = healthInsurance + (healthInsurance * .1)
    } else if (userAge == 18) {
        healthInsurance;
    } else {
        healthInsurance = 0;
    }
        
    /* Health condition section */

    health.forEach((item) => {
        if (item.checked){
            healthCondition.push(item.value);
        }
    });

    if (healthCondition.length == 1) {
        habitInsurance = (healthInsurance * 0.01);
    }
    else if (healthCondition.length == 2) {
        habitInsurance = (healthInsurance * 0.02);
    }
    else if (healthCondition.length == 3) {
        habitInsurance = (healthInsurance * 0.03);
    } else {
        habitInsurance = 0;
    }

        /* Regular Habit section */

    habit.forEach((item) => {
        if (item.checked){
            userHabits.push(item.value);
        }
    });
    userHabits.forEach((item) => {
        if (item == 'Daily exercise'){
        healthInsurance = healthInsurance - (healthInsurance * 0.05);
        } else if (item == 'Smoking' || 'Alcohol' || 'Drugs') {
        healthInsurance = healthInsurance + (healthInsurance * 0.05);
        } else {
            healthInsurance = 0;
        }
    });
    

     /* display final part */

    riskScore = habitInsurance + healthInsurance;
    
    result.innerHTML = `Hi, <span>${userName}!</span> Your risk score is: <span>${Math.ceil(riskScore)} €</span>.`;
    console.log(`Hi, <span>${userName}!</span> Your risk score is: <span>${riskScore.toFixed(0)} €</span>.`);
    
    form.reset();
}

form.addEventListener('submit', getInsurance);
